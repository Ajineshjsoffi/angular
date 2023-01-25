const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql =require('mysql2');
const { query } = require('express');

const app = express();

app.use(cors());
app.use(bodyparser.json());


const db = mysql.createConnection({
       host:'localhost',
       user:'root',
       password:'',
       database:'simpledb',
       port:3306
});

db.connect(err=>{
    if(err){console.log(err,'dberr');}
    console.log('database connected..');
})





const routes = require("./router/router");


app.use("/api", routes);
























app.get('/medicines',(req,res)=>{
    let qr = 'select * from medicines';

    db.query(qr,(err,result)=>{

        if(err)
        {
            console.log(err,"errs");
        }


        if(result.length>0){
            res.send({ 
                 message:'all user data',
                 data:result
            });
        }



    });
});


app.get('/medicines/:id',(req,res)=>{
    let gID = req.params.id;

    let qr =`select * from medicines where id = ${gID}`;

    db.query(qr,(err,result)=>{
        if(err){console.log(err);}

        if(result.length>0)
        {
            res.send({
                message:'get single data',
                data:result
            });
        }
        else
        {
            res.send({
                message:'data not found'
            });
        }
    });
});







app.post('/medicines',(req,res)=>{
    console.log(req.body,'createdata');


    let Name = req.body.Name;
    let price = req.body.price;
    let type = req.body.type;
    let exp = req.body.exp;


    let qr = `insert into medicines(Name,price,type,exp) values('${Name}','${price}','${type}','${exp}') `;

    db.query (qr,(err,result)=>{

        if (err){console.log(err);}
        console.log(result,'result')
        res.send({
            message:'data inserted',
        });



    });

    

});





app.put('/medicines/:id',(req,res)=>{
      
    console.log(req.body,'updatedata');

    let gID = req.params.id;

    let Name = req.body.Name;
    let price = req.body.price;
    let type = req.body.type;
    let exp = req.body.exp;

    let qr = `update medicines set Name='${Name}',price='${price}',type='${type}',exp='${exp}' where id=${gID}`;

    db.query (qr,(err,result)=>{
        if(err) {console.log(err);}
        res.send({
            message:'data updated'
        });
    });


});




app.delete('/medicines/:id',(req,res)=>{
    let qID = req.params.id;

    let qr = `delete from medicines where id ='${qID}'`;
    db.query(qr,(err,result)=>{
        if(err){console.log(err);}

        res.send(
            {
            message:'data deleted'
        }
        )
    });
});



app.listen(3000,()=>{
    console.log('server running .');
});
