import express, { Request, Response } from "express"
import { getMethod, postMethod, deleteMethod, teachersEdit, headteacherEdit, pupilsEdit } from "./functions/functions"
const PORT = 8080
const server = express()
server.use(express.urlencoded({ extended: true }))
server.set("view engine", "ejs")
server.use(express.json())


// Get Default
server.get('/register', (req: Request, res: Response) => {
    try {
        res.render("index", { title: "Working.....?", letter: "Hello World" })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})


// Get
server.get("/:id", getMethod)

// Post
server.post("/:id", postMethod)

// Delete
server.delete("/:id", deleteMethod)

// Edit
server.put("/teachers/:id", teachersEdit)
server.put("/headteachers/:id", headteacherEdit)
server.put("/pupils/:id", pupilsEdit)

server.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`)
})