import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Request, Response } from "express";

export async function CheckingAuth(req: Request, res: Response, next: any) {
  if (!req.headers.authorization) {
    return res.status(200).json({ message: "You must login please!" });
  }
  const USER = await prisma.user.findMany({ where: { hashed: req.headers.authorization } })
  if (USER.length == 0) {
    return res.status(200).json({ message: "You must login please!" });
  }
  next();
}
export async function CheckingUserData(req: Request, res: Response, next: any) {
  if (!req.headers.authorization) {
    return res.status(200).json({ message: "Please login and try again!" })
  } else {
    const ADMIN = await prisma.user.findMany({ where: { hashed: req.headers.authorization } })
    const { role } = ADMIN[0] ? ADMIN[0] : { role: "Not Given" }
    if (role !== "ADMIN") {
      return res.status(200).json({ message: "You are not an ADMIN" })
    } else {
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
  }
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
  const auth = req.headers.authorization
  if (!auth) {
    return res.status(200).json({ message: "You haven't got an account. You must register!" })
  }
  next()
}

export async function CheckAdmin(req: Request, res: Response, next: any) {
  try {
    const { id } = req.body;
    const { ids } = req.params;
    const user = await prisma.user.findUnique({ where: { id: +id } });
    if (user!.role !== "ADMIN") {
      return res
        .status(200)
        .json({ message: "You aren't ADMIN. Only admins can delete!" });
    }
    next();
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: "Error in Checking Admin" });
  }
}

export async function Checking_Admin(req: Request, res: Response, next: any) {
  try {
    const { id } = req.params;
    if (Number(id).toString() == "NaN") {
      return res.status(200).json({ message: "Please login!" });
    }
    const user = await prisma.user.findUnique({
      where: {
        id: +id,
      },
    });
    if (user!.role === "ADMIN") {
      return next();
    } else {
      return res.status(200).json({
        message: "You are not an ADMIN . You can't touch to  PRODUCT!",
      });
    }
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: "Error in Checking Admin" });
  }
}
export function Checking_Product(req: Request, res: Response, next: any) {
  try {
    type Body = {
      name: string;
      price: number;
      description: string;
      author: number;
      number: string;
    };
    const body: Body = req.body;
    if (
      !body.author ||
      !body.description ||
      !body.name ||
      !body.number ||
      !body.price
    ) {
      return res.status(200).json({ message: "Please fill all the gaps!" });
    }
    next();
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: "Error in Checking Product!" });
  }
}

export async function Checking_User(req: Request, res: Response, next: any) {
  try {
    if (!req.headers.authorization) {
      return res.status(200).json({ message: "Please Login!" });
    }
    next();
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: "Error  in Checking User" });
  }
}


export async function CheckUserExist(req: Request, res: Response, next: any) {
  const email: string = req.body.email
  const USER = await prisma.user.findUnique({ where: { email: email } })
  if (!USER) {
    next()
  } else {
    return res.status(200).json({message:"Your account is already"})
  }
}