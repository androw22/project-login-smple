var express = require('express');
var router = express.Router();
var connection = require("./Connection/connectionDB");
/* GET home page. */
router.get("/register",(req,res)=>{
  res.render("register");
});

router.get("/login",(req,res)=>{
  res.render("login",{err:"false",login:"false"});
})

router.post("/login",(req,res,)=>{
  var email = req.body.email,
      pass  = req.body.pass;
    if(email!=null&&pass!=null){
         connection.query("SELECT * FROM login WHERE email=? AND pass=?",[email,pass],(err,result)=>{
           if(!err){
             if(result.length>0){
               res.render("login",{err:'false',login:'true',name:result[0].name});
             }else{
              res.render("login",{err:"true",login:"false"});

             }
           }else{
             res.json("no database");
           }
         })
    }else{
      res.json("no");
    }

})

module.exports = router;
