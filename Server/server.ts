import { pool } from './config/db';
import express, { Request, Response } from "express"
import { getMethod, postMethod, deleteMethod, teachersEdit, headteacherEdit, pupilsEdit } from "./functions/functions"
import cors from "cors"
const PORT = 8080
const server = express()
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())
let arr:any = []
server.post("/login", async (req:Request,res:Response)=>{
  try {
    const {name,lastname,email,password,type} = req.body
    const user = (await pool.query(`SELECT * FROM ${type} WHERE name = $1 AND lastname = $2 AND email = $3 AND password = $4`,[name,lastname,email,password])).rows
    arr.push([name,lastname,email,password,type])
  } catch (error:any) {
  res.status(500).json({message:error.message})
}
})
server.get("/user", async(req:Request,res:Response)=>{
try {
  let user = {
    name:arr[arr.length - 1][0],
    lastname:arr[arr.length - 1][1],
    email:arr[arr.length - 1][2],
   type:arr[arr.length - 1][4],
   password:arr[arr.length - 1][3]
  }
  console.log(arr)
  const newuser = (await pool.query(`SELECT * FROM ${user.type} WHERE name = $1 AND lastname = $2 AND email = $3 AND password = $4`,[user.name,user.lastname,user.email,user.password])).rows
  res.status(200).json({message:newuser})
} catch (error:any) {
  res.status(500).json({message:error.message})
}
})
server.post("/pupil", async (req:Request,res:Response)=>{
try {
  const {name,lastname,email,password,img,country,clas} = req.body
  const pupil = (await pool.query(`SELECT * FROM pupils WHERE name = $1 AND lastname = $2 AND email = $3 AND password = $4`,[name,lastname,email,password])).rows
if(pupil.length==0){
await pool.query(`INSERT INTO pupils (name,lastname,email,password,country,class,img) VALUES ($1,$2,$3,$4,$5,$6,$7)`,[name,lastname,email,password,country,clas,img])
res.status(201).json({message:"Created!"})
}else{
res.status(200).json({message:"You have already registered!"})
}
} catch (error:any) {
  res.status(500).json({message:error.meesage})
}
})

server.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`)
})