const db = require("../dbconnection");
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');

module.exports.home = (req, res) => {
    res.send("api working here ...");
};


module.exports.signup = async (req, res) => {
    console.log(req.body, "data##");

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    let emailchkqry = `select email from users where email = '${email}' `;
    db.query(emailchkqry, async (err, result) => {
        if (err) throw err;


        if (result.length > 0) {
            res.send({
                status: false,
                msg: 'email id already exists'
            });
        } else {
            decryptpwd = await bcrypt.hash(password, 10);

            let insertqry = `insert into users(name,email,password) values('${name}','${email}','${decryptpwd}')`;
            db.query(insertqry, (err, result) => {
                if (err) throw err;
                res.send({
                    status: true,
                    msg: 'user register successful'

                });
            });
        }
    });



   


} ; 


module.exports.login = (req,res)=>{
    console.log(req.body,'login');
    let email = req.body.email;
    let password = req.body.password;

    let chkemailid = `select * from users where email = '${email}'`;
    db.query(chkemailid,async (err,result)=>{

        if(err) throw err;
        

          if(result.length > 0){

            
            let data={
            name:result[0].name,
            email:result[0].email
        } ; 

             let chkpwd = await bcrypt.compare(password,result[0].password);
             console.log(chkpwd,'chkpwd##');
             if (chkpwd === true){


                res.send({
                    status:true,
                    msg:'user login succesful'
                });
             }else{

                const token = jwt.sign({data },'privatekey');
                console.log(token,'token##');
                res.send({
                    status:true,
                    token:token,
                    result:data,
                    msg:'user login succesful'
                });
             }
             

          }else{

            res.send({

                status:false,
                msg:'invalid email id'

            });

          }

    });
}








module.exports.all = (req, res) => {
    // check verifyToken
 
      let tutorialqry = `select * from users`;
      db.query(tutorialqry, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
          res.send({
            status: true,
            data: result,
          });
        } else {
          res.send({
            status: false,
            msg: "data not found",
          });
        }
      });
    }
  