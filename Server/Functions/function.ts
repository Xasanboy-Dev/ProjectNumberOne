import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const SECRET_WORD = "SECRET";

export async function GetUsers(req: Request, res: Response) {
  try {
    const Users = await prisma.user.findMany()
    res.status(200).json({ message: "Users", Users });
  } catch (error: any) {
    console.log(error)
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
    const createdUser = await prisma.user.create({
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

    const user = await prisma.user.findUnique({
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
    const { id } = req.params
    const user = await prisma.user.findUnique({ where: { id: +id } })
    if (!user) {
      return res.status(200).json({ message: "Please check getting  ID!" })
    }
    res.status(200).json({ message: "User", user })
  } catch (error: any) {
    console.log(error);
    res.status(200).json({ message: "Error: Getting By id" });
  }
}

export async function DeleteUser(req: Request, res: Response) {
  try {
    const id = req.params.ids;
    const DeletedUser = await prisma.user.delete({
      where: {
        id: +id,
      },
    });
    res.status(200).json({ message: "Deleted User: ", DeletedUser })
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: "Error: Delete User" });
  }
}


export async function UserToAdmin(req: Request, res: Response) {
  try {
    const { id } = req.params
    const user = await prisma.user.findUnique({
      where: {
        id: +id
      }
    })
    if (user) {
      await prisma.user.update({
        where: {
          id: +id
        },
        data: {
          role: "ADMIN"
        }
      })
      const UpdatedUser = await prisma.user.findUnique({ where: { id: +id } })
      return res.status(200).json({ message: "Updated succesfully!", UpdatedUser })
    }
    res.status(200).json({ message: "This user not Found. Please check your ID!" })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({ message: "Error in User to Admin" })
  }
}

export async function Get_All_Products(req: Request, res: Response) {
  try {
    const Products = await prisma.products.findMany()
    res.status(200).json({ message: "All Products", Products })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({ message: "Error: Get All Products" })
  }
}


export async function Add_Products(req: Request, res: Response) {
  try {
    const body = req.body
    const Created_Product = await prisma.productName.create({
      data: body
    })
    res.status(201).json({ message: "Created Succesfully", Created_Product })
  } catch (error: any) {
    console.log(error)
    res.status(200).json({ message: "Error: Adding a new Product!" })
  }
}

export async function Create_Type_Product(req: Request, res: Response) {
  try {
    type Body = {
      name: string
      price: number
      description: string
      author: number
      number: string
    }
    const body: Body = req.body
    const User = await prisma.user.findUnique({ where: { id: body.author } })
    if (!User) {
      return res.status(200).json({ message: "Please Login and then try again!" })
    }
    const Updated_User = await prisma.user.updateMany({
      where: {
        id: body.author
      },
      data: {
        my_created_product: JSON.stringify(body)
      }
    })
    const Products = await prisma.products.create({
      data: {
        name: ["Fruits"]
      }
    })
    console.log([Updated_User, Products])
  } catch (error: any) {
    console.log(error)
    res.status(500).json({ message: "Error: Creating Type of Product!" })
  }
}