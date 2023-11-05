import express from "express"
import mongoose from "mongoose"
import cors from 'cors'
import bodyParser from "body-parser"
import videoRoutes from './routes/video.js'

import path from 'path'

const app=express()
app.use(cors())
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use('/uploads',express.static(path.join('uploads')))


app.get('/',(req,res)=>{
    res.send("hello")
})
app.use(bodyParser.json())

app.use('/video',videoRoutes)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

const PORT= 5000
app.listen(PORT,()=>{
    console.log(`Server Running on the PORT ${PORT}`)
})


const DB_URL = "mongodb+srv://pradeep123kaiscf:pradeep@cluster0.ymv1mj1.mongodb.net/"
mongoose.connect(DB_URL,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("MongoDB database connected")
}).catch((error)=>{
    console.log(error)
})