import { Request, Response } from "express";
import { pool } from "../config/db";

export async function Balance(req: Request, res: Response) {
  try {
  } catch (error: any) {}
}

const user: string[] = [];

export async function PostDashboard(req: Request, res: Response) {
  try {
    const { name, lastname, email, image, id } = req.body;
    user[0] = name;
    user[1] = lastname;
    user[2] = email;
    let User: any = (
      await pool.query(`SELECT * FROM users WHERE id = $1`, [id])
    ).rows;
    user[3] = User;
    user[4] = id;
    res.status(200).json({ message: "Ok" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export async function GetDashboard(req: Request, res: Response) {
  try {
    const { id } = req.params;
    if (id == "all") {
      const users = (
        await pool.query(`SELECT * FROM users WHERE account = 'Public'`)
      ).rows;
      res.status(200).json({ message: { users, user } });
    } else {
      const users = (
        await pool.query(
          `SELECT * FROM users WHERE name LIKE '%${id}%' OR lastname LIKE '${id}' AND account = 'Public';`
        )
      ).rows;
      res.status(200).json({ message: { users, user } });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

let logOutUser: any;
export async function PostOut(req: Request, res: Response) {
  try {
    logOutUser = req.body;
    res.status(200).json({ meesgae: "Ok Bro!" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
export async function GetOut(req: Request, res: Response) {
  try {
    res.status(200).json({ message: logOutUser });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export async function GetSimplePage(req: Request, res: Response) {
  try {
    res.status(200).json({ message: "Hello Bro" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export async function PostUser(req: Request, res: Response) {
  try {
    const { name, lastname, email, password } = req.body;
    const user = (
      await pool.query(
        `SELECT * FROM users WHERE  email = $1 AND password = $2`,
        [email, password]
      )
    ).rows;
    if (user.length == 0) {
      await pool.query(
        `INSERT INTO users (name,lastname,email,password) VALUES ($1,$2,$3,$4)`,
        [name, lastname, email, password]
      );
      res.status(201).json({ message: "Created!" });
    } else {
      res.status(200).json({ message: "Your account is already exist!" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
let arr: any;
export async function PostLogin(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const user = (
      await pool.query(
        `SELECT * FROM users WHERE  email = $1 AND password = $2`,
        [email, password]
      )
    ).rows;
    if (user.length == 1) {
      arr = user;
      return res.status(200).json({ message: user });
    } else {
      res
        .status(204)
        .json({ message: "Not Found. Please check your answers!" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export async function GetUser(req: Request, res: Response) {
  try {
    res.status(200).json({ message: arr });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

let chattingNumber: any;
export async function PostChattingId(req: Request, res: Response) {
  try {
    const body: any[] = req.body;
    const { id } = req.params;
    if (Number(id).toString() !== "NaN") {
      chattingNumber = [id, body];
      return res.status(200).json({ message: "Ok!" });
    }
    res.status(204).json({ message: "Your partner has not found!" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export async function GetChatting(req: Request, res: Response) {
  try {
    if (chattingNumber == undefined) {
      return res.status(204).json({ message: "Plase go back!" });
    } else {
      let id = (
        await pool.query(`SELECT * FROM users WHERE id = $1`, [
          chattingNumber[1].body,
        ])
      ).rows;
      let hisMessages = (
        await pool.query(`SELECT * FROM messages WHERE myid = $1`, [
          chattingNumber[0],
        ])
      ).rows;
      res.status(200).json({ message: hisMessages, user: id });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

let userid: any;
export async function PostSetting(req: Request, res: Response) {
  try {
    userid = (
      await pool.query(`SELECT * FROM users WHERE id = $1`, [req.body.id])
    ).rows;
    res.status(200).json({ message: userid });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export async function GetSettings(req: Request, res: Response) {
  try {
    res.status(200).json({ message: userid });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export async function PostSettingId(req: Request, res: Response) {
  try {
    const { id } = req.params;
    let { country, age, gender, account, foto } = req.body.body;
    if (!foto) {
      foto = "Hello World";
    }
    await pool.query(
      `UPDATE users SET age = $1,country = $2,gender = $3,account = $4,image = $5 WHERE id = $6`,
      [age, country, gender, account, foto, id]
    );
    res.status(200).json({ message: "Saved succesfully!" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

let shoppingUser: any;
export async function PostShoppingId(req: Request, res: Response) {
  try {
    const { id } = req.params;
    shoppingUser = (await pool.query(`SELECT * FROM users WHERE id = $1`, [id]))
      .rows;
    res.status(200).json({ message: "Good!" });
  } catch (error: any) {
    res.status(500).json({ message: error.meesgae });
  }
}
export async function GetShopping(req: Request, res: Response) {
  try {
    const allShoppingList = (await pool.query(`SELECT * FROM shopping`)).rows;
    if (shoppingUser !== undefined) {
      return res
        .status(200)
        .json({ message: { shoppingUser, allShoppingList } });
    } else {
      res.status(400).json({
        message: "Please relogin! Your data is not exist in our data.",
      });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.meesgae });
  }
}

let author: any;
export function PostProduct(req: Request, res: Response) {
  try {
    author = req.body.author;
    res.status(200).json({ message: "Good!" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export function GetProduct(req: Request, res: Response) {
  try {
    res.status(200).json({ message: author });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export async function PostCreateProduct(req: Request, res: Response) {
  try {
    const { name, author, model, color, size, text, image, price, number } =
      req.body.message;
    const allProducts = (await pool.query(`SELECT * FROM shopping`)).rows;
    let { id } = author;
    let created = (
      await pool.query(
        `INSERT INTO shopping (name,size,color,foto,price,userId,phone,text) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`,
        [name, size, color, image, price, id, number, text]
      )
    ).rows;
    return res.status(200).json({ message: "Created!" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

let ProductsInBasket: any;
let coins: any;
export async function PostBasket(req: Request, res: Response) {
  try {
    const { person, products } = req.body;
    const User = (
      await pool.query(`SELECT * FROM users WHERE id = $1`, [person])
    ).rows;
    let Products: any = [];
    coins = User[0].coin == null ? 0 : User[0].coin;
    Products.push(User);
    for (let r in products) {
      Products.push(
        (
          await pool.query(`SELECT * FROM shopping WHERE id = $1`, [
            products[r],
          ])
        ).rows
      );
    }
    ProductsInBasket = Products;
    res.status(200).json({ message: "Good!" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export function GetBasket(req: Request, res: Response) {
  try {
    if (ProductsInBasket !== undefined && coins !== undefined) {
      return res.status(200).json({ message: { ProductsInBasket, coins } });
    }
    res.status(200).json({
      message: "You have some problems in Basket Products or in coin!",
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export async function GetAllUsers(req: Request, res: Response) {
  try {
    const Users = (await pool.query(`SELECT * FROM users`)).rows;
    res.status(200).json({ message: Users });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

let name: any = [];
let id: any = [];
export async function PostGame(req: Request, res: Response) {
  try {
    name = req.body.name;
    id = req.body.id;
    if (req.body.name !== undefined) {
      return res.status(200).json({ message: "Good!" });
    } else {
      res.status(204).json({ message: "Get out!" });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      Message: "You have an error in Posting Game",
    });
  }
}

export async function GetGame(req: Request, res: Response) {
  try {
    if (name !== undefined) {
      const Gamer = (
        await pool.query(`SELECT * FROM games WHERE name = $1 AND myid = $2`, [
          name,
          id,
        ])
      ).rows;
      return res.status(200).json({ message: Gamer });
    } else {
      res.status(204).json({ meessage: "Get Out!" });
    }
  } catch (error: any) {
    res.status(204).json({ message: "You have an error in Getting Game!" });
  }
}

export async function PostRecord(req: Request, res: Response) {
  try {
    console.log(req.body);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      myMessage: "You have an error in posting a record",
    });
  }
}
