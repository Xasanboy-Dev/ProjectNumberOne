import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Request, Response } from "express";

export function CheckingAuth(req: Request, res: Response, next: any) {
  if (!req.headers.authorization) {
    return res.status(200).json({ message: "You must login please!" });
  }
  next();
}

export function CheckingUserData(req: Request, res: Response, next: any) {
  const { name, lastname, email, password } = req.body;
  if (!name || !lastname || !email || !password) {
    return res.status(200).json({ message: "Please fill all the gaps!" });
  }
  if (password.toString().length < 4 || password.toString().length > 10) {
    return res.status(200).json({
      mesage: "Length of password Min:4 ,Max:10 || PLaese check your password",
    });
  }
  next();
}

export function CheckingLogin(req: Request, res: Response, next: any) {
  const { name, lastname, email, password } = req.body;
  if (!name || !lastname || !email || !password) {
    return res.status(500).json({ message: "Please fill all the gaps!" });
  }
  if (password.toString().length < 4 || password.toString().length > 10) {
    return res
      .status(500)
      .json({ message: "Min Password length:4 || Max password length:10" });
  }
  next();
}

export function CheckingUser(req: Request, res: Response, next: any) {
  if (!req.headers.authorization) {
    return res.status(500).json({ message: "Please login." })
  }
  next()
}

export async function CheckAdmin(req: Request, res: Response, next: any) {
  try {
    const { id } = req.body
    const { ids } = req.params
    const user = await prisma.user.findUnique({ where: { id: +id } })
    if (user!.role !== "ADMIN") {
      return res.status(200).json({ message: "You aren't ADMIN. Only admins can delete!" })
    }
    next()
  } catch (error: any) {
    console.log(error)
    res.status(500).json({ message: "Error in Checking Admin" })
  }
}

export async function Checking_the_Product(req: Request, res: Response, next: any) {
  try {
    type Product = {
      name: string
      price: number
      description: string
      author: number
      number: number
    }
    const body: Product = req.body
    if (!body.author || !body.description || !body.name || !body.number || !body.price) {
      return res.status(200).json({ message: "Please fill all the gaps!" })
    }
    next()
  } catch (error: any) {
    console.log(error)
    res.status(500).json({ message: "Error: CHeking  Product!" })
  }
}

export async function Cheacking_Admin_For_Creating_Product(req: Request, res: Response, next: any) {
  try {
    type Body = {
      name: string
      price: number
      description: string
      author: number
      number: string
    }
    const body: Body = req.body
    if (!body.author || !body.description || !body.name || !body.number || !body.price) {
      return res.status(200).json({ message: "Please fill all the gaps!" })
    }
    next()
  } catch (error: any) {
    console.log(error)
    res.status(500).json({ message: "Error: Cheacking_Admin_For_Creating_Product " })
  }
}