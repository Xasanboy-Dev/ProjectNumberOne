import { Request, Response } from "express"
import { pool } from "../config/db"

export const getMethod = async (req: Request, res: Response) => {
    try {
        const { id }: any = req.params
        if (id == "teachers") {
            const teachers = (await pool.query(`SELECT * FROM teachers`)).rows
            res.status(200).json({ message: teachers })
        } else if (id == "pupils") {
            const pupils = (await pool.query(`SELECT * FROM pupils`)).rows
            res.status(200).json({ message: pupils })
        } else if (id == "headteachers") {
            const headteacher = (await pool.query(`SELECT * FROM headteacher`)).rows
            res.status(200).json({ message: headteacher })
        } else {
            return res.status(400).json({ message: "Not Found" })
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}
// Register
export const postMethod = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { name, lastname, email, password, country, img } = req.body
        if (id == "teachers") {
            const { degree } = req.body
            if (name !== undefined && lastname !== undefined && email !== undefined && password !== undefined && img !== undefined) {
                const teachers = (await pool.query(`SELECT * FROM teachers WHERE name = $1 AND email = $2 AND password = $3`, [name, email, password])).rows
                if (teachers.length == 0) {
                    pool.query(`INSERT INTO teachers (name,lastname,email,password,country,img,degree) VALUES ($1,$2,$3,$4,$5,$6,$7)`, [name, lastname, email, password, country, img, degree])
                    return res.status(201).json({ message: "Created!" })
                } else {
                    res.status(200).json({ message: "You have already registred!" })
                }
            } else {
                res.status(400).json({ message: "You must fill all gaps!" })
            }
        } else if (id == "headteacher") {
            const { degree } = req.body
            if (name !== undefined && lastname !== undefined && email !== undefined && password !== undefined && img !== undefined) {
                const headteacher = (await pool.query(`SELECT * FROM headteacher WHERE name = $1 AND email  = $2 AND password = $3`, [name, email, password])).rows
                if (headteacher.length == 0) {
                    pool.query(`INSERT INTO headteacher (name,lastname,email,password,country,img,degree) VALUES ($1,$2,$3,$4,$5,$6,$7)`, [name, lastname, email, password, country, img, degree])
                    return res.status(201).json({ message: "Created!" })
                } else {
                    res.status(200).json({ message: "You have already registered!" })
                }
            } else {
                res.status(400).json({ message: "You must fill all gaps!" })
            }
        } else if (id == "pupils") {
            const { clas } = req.body
            if (name !== undefined && lastname !== undefined && email !== undefined && password !== undefined && img !== undefined) {
                const pupils = (await pool.query(`SELECT * FROM pupils WHERE name = $1 AND email= $2 AND password = $3`, [name, email, password])).rows
                if (pupils.length == 0) {
                    pool.query(`INSERT INTO pupils (name,lastname,email,password,country,img,class) VALUES ($1,$2,$3,$4,$5,$6,$7)`, [name, lastname, email, password, country, img, clas])
                    return res.status(201).json({ message: "Created!" })
                } else {
                    res.status(200).json({ message: "You have already registered!" })
                }
            } else {
                res.status(400).json({ message: "You must fill all gaps!" })
            }
        } else {
            res.status(400).json({ message: "not Found!" })
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}
// Delete
export const deleteMethod = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        let resource = id.split("&")[0]
        let ids = id.split("&")[1].split("=")[1]
        if (resource == "teachers") {
            if (ids !== undefined) {
                pool.query(`DELETE  FROM teachers WHERE id = $1`, [ids])
                res.status(200).json({ message: `Your teacher with id = ${ids} has deleted!` })
            }
        } else if (resource == "pupils") {
            if (ids !== undefined) {
                pool.query(`DELETE FROM pupils WHERE id = $1`, [ids])
                res.status(200).json({ message: `Your pupil with id = ${ids} has deleted!` })
            }
        } else if (resource == "headteacher") {
            if (ids !== undefined) {
                pool.query(`DELETE FROM headteacher WHERE id = $1`, [ids])
                res.status(200).json({ message: `Your headteacher with id = ${ids} has deleted!` })
            }
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}
// 
export const teachersEdit = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { name, lastname, email, password, country, degree, img } = req.body
        const user = (await pool.query(`SELECT * FROM teachers WHERE id = $1`, [id])).rows[0]
        if (id !== undefined) {
            pool.query(`UPDATE teachers SET name = $1, lastname = $2,email = $3,password = $4,country=$5,degree=$6,img=$7`, [
                name !== undefined ? name : user.name,
                lastname !== undefined ? lastname : user.lastname,
                email !== undefined ? email : user.email,
                password !== undefined ? password : user.password,
                country !== undefined ? country : user.country,
                degree !== undefined ? degree : user.degree,
                img !== undefined ? img : user.img
            ])
            res.status(200).json({ message: `Your teacher with id ${id} has edited!` })
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}

export const pupilsEdit = async (req: Request, res: Response) => {
    try {
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}

export const headteacherEdit = async (req: Request, res: Response) => {
    try {
        const { name, lastname, email, password, country, clas, img } = req.body
        if (name !== undefined && email !== undefined && password !== undefined) {
            const pupil = pool.query(`SELECT * FROM pupils WHERE name = $1 AND email = $2 AND password = $3`, [name, email, password])
        }else{
            
        }
    } catch (error: any) {

    }
}