import { Request, Response } from "express";
import bcrypt, { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const SECRET_WORD = "SECRET";

export async function GetUsers(req: Request, res: Response) {
  try {
    const Users = await prisma.user.findMany();
    res.status(200).json({ message: "Users", Users });
  } catch (error: any) {
    console.log(error);
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
      hashed: hashObject,
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
    const { id } = req.params;
    const user = await prisma.user.findUnique({ where: { id: +id } });
    if (!user) {
      return res.status(200).json({ message: "Please check getting  ID!" });
    }
    res.status(200).json({ message: "User", user });
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
    res.status(200).json({ message: "Deleted User: ", DeletedUser });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: "Error: Delete User" });
  }
}

export async function UserToAdmin(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        id: +id,
      },
    });
    if (user) {
      await prisma.user.update({
        where: {
          id: +id,
        },
        data: {
          role: "ADMIN",
        },
      });
      const UpdatedUser = await prisma.user.findUnique({ where: { id: +id } });
      return res
        .status(200)
        .json({ message: "Updated succesfully!", UpdatedUser });
    }
    res
      .status(200)
      .json({ message: "This user not Found. Please check your ID!" });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: "Error in User to Admin" });
  }
}

export async function Get_Products(req: Request, res: Response) {
  try {
    const products = await prisma.products.findMany();
    res.status(200).json({ message: products });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: "Error in Getting all Products!" });
  }
}

export async function creating_Product(req: Request, res: Response) {
  try {
    type Body = {
      name: string;
      price: number;
      description: string;
      author: number;
      number: string;
    };
    const body: Body = req.body;
    const Created_Product = await prisma.products.create({
      data: {
        name: body.name,
        author: body.author,
        description: body.description,
        price: body.price,
        number: body.number,
      },
    });
    res.status(201).json({ message: "Created!", Created_Product });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: "Error in Creatin Product!" });
  }
}

export async function Deleting_Product(req: Request, res: Response) {
  try {
    const { remove } = req.body;
    const Deleted_Product = await prisma.products.delete({
      where: {
        id: remove,
      },
    });
    res.status(200).json({ message: "Deleted succesfully!", Deleted_Product });
  } catch (error: any) {
    console.log(error);
    res.status(200).json({ message: "Error in Deleting Product" });
  }
}
export async function Patch_Product(req: Request, res: Response) {
  try {
    type Body = {
      name: string;
      price: number;
      description: string;
      author: number;
      number: string;
      star: number;
      product: number;
    };
    const body: Body = req.body;
    let product = body.product;
    const Selected_Product = await prisma.products.findUnique({
      where: { id: product },
    });
    if (!Selected_Product) {
      return res
        .status(200)
        .json({ message: "You can not edit the not exist Product!" });
    }
    const { author, name, price, description, number, star } = Selected_Product;
    const Updated_Product = await prisma.products.update({
      where: {
        id: product,
      },
      data: {
        author: body.author ? body.author : author,
        description: body.description ? body.description : description,
        name: body.name ? body.name : name,
        number: body.number ? body.number : number,
        price: body.price ? body.price : price,
        star: body.star ? body.star : star,
      },
    });
    res.status(200).json({ message: "Updated succesfuly!", Updated_Product });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: "Error in Editing Product!" });
  }
}

//        Basket
export async function Get_Basket(req: Request, res: Response) {
  try {
    const { user } = req.params;
    const USER = await prisma.user.findUnique({ where: { id: +user } });
    if (!USER) {
      return res
        .status(200)
        .json({ message: "User Not Found. Please check and try again!" });
    }
    res.status(200).json({ message: USER });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: "Error in Getting Basket" });
  }
}
export async function Post_Basket_Product(req: Request, res: Response) {
  try {
    type userBody = {
      id: number;
      name: string;
      lastname: string;
      email: string;
      password: string;
      hashed: string;
      role: string;
      likes: number[];
      my_created_product: string[];
      basket: number[];
    };
    const { id } = req.body;
    const user = req.params.user;
    const ids: userBody | null = await prisma.user.findUnique({
      where: { id: +user },
    });
    if (!ids) {
      return res.status(200).json({ message: "Please Login" });
    }
    let arr = ids.basket;
    if (!arr.includes(id)) {
      arr.push(id);
    } else {
      return res.status(200).json({ message: "Already exist!" });
    }
    const Updated_basket = await prisma.user.update({
      where: {
        id: +user,
      },
      data: {
        basket: arr,
        email: ids.email,
        hashed: ids.hashed,
        id: ids.id,
        lastname: ids.lastname,
        likes: ids.likes,
        my_created_product: ids.my_created_product,
        name: ids.name,
        password: ids.password,
        role: ids.role,
      },
    });
    res.status(200).json({ message: "Added succesfully!", arr });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: "Error in adding a product to Basket!" });
  }
}

export async function delete_Basket_Product(req: Request, res: Response) {
  try {
    type userBody = {
      id: number;
      name: string;
      lastname: string;
      email: string;
      password: string;
      hashed: string;
      role: string;
      likes: number[];
      my_created_product: string[];
      basket: number[];
    };
    const { user } = req.params;
    const { id } = req.body;
    const USER: userBody | null = await prisma.user.findUnique({
      where: { id: +user },
    });
    if (!USER) {
      return res
        .status(404)
        .json({ message: "User Not Found!. Please try again!" });
    }
    let arr: number[] = USER.basket;
    let newArray: number[] = [];

    for (let r in arr) {
      if (arr[r] != id) {
        newArray.push(arr[r]);
      }
    }

    const deleted_product_at_basket = await prisma.user.update({
      where: {
        id: +user,
      },
      data: {
        basket: newArray,
        email: USER.email,
        hashed: USER.hashed,
        id: USER.id,
        lastname: USER.lastname,
        likes: USER.likes,
        my_created_product: USER.my_created_product,
        name: USER.name,
        password: USER.password,
        role: USER.role,
      },
    });
    res
      .status(200)
      .json({ message: "DELETED at basket!", deleted_product_at_basket });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: "Error in Deleting product in Basket!" });
  }
}
