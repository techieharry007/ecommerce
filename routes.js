const {Router} =require("express")
const command=require('../controller/controls')
const {upload}=require('../multer/multer')
const router=Router()
router.get('/get',command.getResponse)
router.post('/post',command.postResponse)
router.post('/user',command.validateUser)
router.post('/products',upload.single("img"),command.addProduct)
module.exports=router