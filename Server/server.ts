import express, { request, Request, Response } from "express"
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
        const { name, lastname, email, id } = req.body
        user[0] = name
        user[1] = lastname
        user[2] = email
        user[3] = id
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
            const users = (await pool.query(`SELECT * FROM users WHERE account = 'Public'`)).rows
            res.status(200).json({ message: { users, user } })
        } else {
            const users = (await pool.query(`SELECT * FROM users WHERE name LIKE '%${id}%' OR lastname LIKE '${id}' AND account = 'Public';`)).rows
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
        const { name, lastname,  email, password } = req.body
        const user = (await pool.query(`SELECT * FROM users WHERE  email = $1 AND password = $2`, [email, password])).rows
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
        const { email, password } = req.body
        const user = (await pool.query(`SELECT * FROM users WHERE  email = $1 AND password = $2`, [email, password])).rows
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
let chattingNumber: any
server.post("/chatting/:id", (req: Request, res: Response) => {
    try {
        const body: any[] = req.body
        const { id } = req.params
        if (Number(id).toString() !== "NaN") {
            chattingNumber = [id, body]
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
            let id = (await pool.query(`SELECT * FROM users WHERE id = $1`, [chattingNumber[1].body])).rows
            let hisMessages = (await pool.query(`SELECT * FROM messages WHERE myid = $1`, [chattingNumber[0]])).rows
            res.status(200).json({ message: hisMessages, user: id })
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})
// Settings input ID
let userid: any
server.post('/settings', async (req: Request, res: Response) => {
    try {
        userid = (await pool.query(`SELECT * FROM users WHERE id = $1`, [req.body.id])).rows
        res.status(200).json({ message: userid })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})

server.get("/settings", (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: userid })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})

server.post("/setting/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { country, age, gender, account } = req.body.body
        await pool.query(`UPDATE users SET age = $1,country = $2,gender = $3,account = $4 WHERE id = $5`, [age, country, gender, account, id])
        res.status(200).json({ message: "Saved succesfully!" })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})

//Shopping GET Method
let shoppingUser: any
server.post("/shopping/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        shoppingUser = (await pool.query(`SELECT * FROM users WHERE id = $1`, [id])).rows
        res.status(200).json({ message: "Good!" })
    } catch (error: any) {
        res.status(500).json({ message: error.meesgae })
    }
})


server.get('/shopping', async (req: Request, res: Response) => {
    try {
        const allShoppingList = (await pool.query(`SELECT * FROM shopping`)).rows
        if (shoppingUser !== undefined) {
            return res.status(200).json({ message: { shoppingUser, allShoppingList } })
        } else {
            res.status(400).json({ message: "Please relogin! Your data is not exist in our data." })
        }
    } catch (error: any) {
        res.status(500).json({ message: error.meesgae })
    }
})

// For Game
let Gamer: any
server.post("/game", async (req: Request, res: Response) => {
    try {
        Gamer = req.body.data
        res.status(200).json({ message: Gamer })
        Gamer = ""
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})

server.get("/game", (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: Gamer })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})
server.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`)
})