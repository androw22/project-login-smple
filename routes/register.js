var express = require('express');
var router = express.Router();
var Register=require("./Connection/db/insertRegister");
router.post("/register",(req,res)=>{
    var name = req.body.name,
        fristName =req.body.fristName,
        email=req.body.email,
        pass=req.body.pass,
        phone=req.body.phone;
    if(name !=null&&fristName!=null&&email!=null&&pass!=null&&phone!=null){
        Register(res,name,fristName,email,phone,pass);
    }else{
        res.json("no Empty input");
    }
})

module.exports=router;