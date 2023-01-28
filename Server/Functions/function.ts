import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const SECRET_WORD = "SECRET";

export async function GetUsers(req: Request, res: Response) {
  try {
    const Users = await prisma.ussers.findMany();
    res.status(200).json({ message: "Users", Users });
  } catch (error: any) {
    res.status(500).json({ message: "Errror: Geting default" });
  }
}

export async function PostUser(req: Request, res: Response) {
  try {
    const { password, email, name, lastname } = req.body;
    const hashObject = await bcrypt.hash(req.body.toString(), 7);
    const hashPassword = await bcrypt.hash(password.toString(), 7);
    const hello = await jwt.sign(hashPassword, SECRET_WORD);
    const newUser = {
      name,
      lastname,
      email,
      password: hello,
      hashed: hashObject
    };
    const createdUser = await prisma.ussers.create({
      data: newUser,
    });
    res.status(200).json(createdUser);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: "Error: Posting User" });
  }
}

export async function Login(req: Request, res: Response) {
  try {
    const { name, lastname, email, password } = req.body;

    const user = await prisma.ussers.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      const text = await jwt.verify(user.password, SECRET_WORD);
      const bool = await bcrypt.compareSync(
        password.toString(),
        text.toString()
      );
      if (bool) {
        return res.status(200).json({ message: "Welcome to your dashboard!" });
      } else {
        return res.status(200).json({ message: "Please check your data!" });
      }
    }
    res.status(200).json({ message: "Not Found!" });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: "Error: Login Posting" });
  }
}

export async function GetById(req: Request, res: Response) {
  try {
    console.log(req.body);
  } catch (error: any) {
    console.log(error);
    res.status(200).json({ message: "Error: Getting By id" });
  }
}

export async function DeleteUser(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const DeletedUser = await prisma.ussers.delete({
      where: {
        id: +id,
      },
    });
    console.log(DeletedUser);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: "Error: Delete User" });
  }
}
