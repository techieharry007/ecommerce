const express=require("express")
const routes=require("./routes/routes")
const cors=require('cors')
const app=express()
const corsOrigin={
    origin:"http://localhost:3000",
    optionSuccessStatus:200
}
app.use(cors(corsOrigin))   
app.use(express.json())
app.use("/",routes)
app.listen(8080)
