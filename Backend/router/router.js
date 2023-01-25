const express = require("express");
const router = express.Router();

const controller = require("../controller/controller");

router.get("/home",controller.home);



router.post('/signup',controller.signup);


router.post('/login',controller.login);

router.get("/all",controller.all);









module.exports = router;