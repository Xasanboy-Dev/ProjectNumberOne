import express, { Request, Response } from "express"
import { pool } from "./config/db"
import cors from "cors"
const server = express()
const PORT = 8080
server.use(express.json())
server.use(cors())
server.use(express.urlencoded({ extended: true }))

server.get('/', (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "Hello Bro" })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})
// Post

server.post("/users", async (req: Request, res: Response) => {
    try {
        const { name, lastname, email, password } = req.body
        if (name !== undefined && lastname !== undefined && email !== undefined && password !== undefined) {
            const user = (await pool.query(`SELECT * FROM users WHERE name = $1 AND lastname = $2 AND email = $3 AND password = $4`, [name, lastname, email, password])).rows
            if (user.length == 0) {
                (await pool.query(`INSERT INTO users (name,lastname,email,password) VALUES ($1,$2,$3,$4)`, [name, lastname, email, password])).rows
            } else {
                res.status(204).json({ message: "You have already registered!" })
            }
        } else {
            res.status(200).json({ message: "You must fill all th gaps!" })
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})

server.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`)
})