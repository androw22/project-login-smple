var mysql = require("mysql");
var connection = require("../connectionDB");


async function Register(res,name,first_Name,email,phone,pass){

await connection.query("INSERT INTO `login` (`name`, `fristName`, `email`, `phone`, `pass`) VALUES (?,?,?,?,?)"
,[name,first_Name,email,phone,pass],async(err,result)=>{
    if(!err){
        res.json("ok");
    }else{
        res.json("no");
    }
})



}


module.exports=Register;