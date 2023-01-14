import express, { Request, Response } from "express"
import { pool } from "./config/db"
import cors from "cors"
const server = express()
const PORT = 8080
server.use(express.json())
server.use(cors())
server.use(express.urlencoded({ extended: true }))
// Dashboard Post
const user: string[] = []
server.post("/dashboard", (req: Request, res: Response) => {
    try {
        const { name, lastname, email } = req.body
        user[0] = name
        user[1] = lastname
        user[2] = email
        res.status(200).json({ message: "Ok" })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})
// Dashboard
server.get("/dashboard/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        if (id == "all") {
            const users = (await pool.query(`SELECT * FROM users`)).rows
            res.status(200).json({ message: { users, user } })
        } else {
            const users = (await pool.query(`SELECT * FROM users WHERE name LIKE '%${id}%' OR lastname LIKE '${id}';`)).rows
            console.log(users)
            res.status(200).json({ message: { users, user } })
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})
let logOutUser: any
// Post for Log Out
server.post('/out', (req: Request, res: Response) => {
    try {
        logOutUser = req.body
        res.status(200).json({ meesgae: "Ok Bro!" })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})
// Get for Log Out
server.get("/out", (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: logOutUser })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})
// Simple Page
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
        const user = (await pool.query(`SELECT * FROM users WHERE name = $1  AND lastname = $2 AND email = $3 AND password = $4`, [name, lastname, email, password])).rows
        if (user.length == 0) {
            await pool.query(`INSERT INTO users (name,lastname,email,password) VALUES ($1,$2,$3,$4)`, [name, lastname, email, password])
            res.status(201).json({ message: "Created!" })
        } else {
            res.status(200).json({ message: "Your account is already exist!" })
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})
let arr: any


server.post('/login', async (req: Request, res: Response) => {
    try {
        const { name, lastname, email, password } = req.body
        const user = (await pool.query(`SELECT * FROM users WHERE name = $1 AND lastname = $2 AND email = $3 AND password = $4`, [name, lastname, email, password])).rows
        if (user.length == 1) {
            arr = user
            return res.status(200).json({ message: user })
        } else {
            res.status(204).json({ message: "Not Found. Please check your answers!" })
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})
server.get('/user', async (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: arr })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})
// Chatting
let chattingNumber: string
server.post("/chatting/:id", (req: Request, res: Response) => {
    try {
        const { id } = req.params
        if (Number(id).toString() !== "NaN") {
            chattingNumber = id
            return res.status(200).json({ message: "Ok!" })
        }
        res.status(204).json({ message: "Your partner has not found!" })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})
// Get chatting page
server.get('/chatting', async (req: Request, res: Response) => {
    try {
        if (chattingNumber == undefined) {
            return res.status(204).json({ message: "Plase go back!" })
        } else {
            let hisMessages = (await pool.query(`SELECT * FROM messages WHERE myid = $1`, [chattingNumber])).rows
            console.log(hisMessages)
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})
server.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`)
})