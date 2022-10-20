const {Pool} =require('pg')
   const pool=new Pool({
        user:"postgres",
        host:"localhost",
        database:"apple",
        password:"12345",
        port:5432
    })
    pool.connect(function(err){
        if(err){
            console.log(err,"cannot connect")
        }
        console.log("connected")
    })
   
module.exports=pool