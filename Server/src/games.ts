import { Request, Response } from "express";
import { pool } from "./../config/db"

export async function PostMath(req: Request, res: Response) {
    try {
        const { name, id } = req.body
        const games = (await pool.query(`SELECT * FROM games WHERE name = $1 AND myid = $2`, [name, id])).rows
        if (games.length !== 0) {
            return res.status(200).json({ message: games }) 
        } else {
            res.status(204).json({ message: "Not Found. PLease go out!" })
        }
    } catch (error: any) {
        res.status(500).json({ message: "You have an error in Posting the score!" })
    }
}