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

export function CheckingUser(req:Request,res:Response,next:any){
  if(!req.headers.authorization){
    return res.status(500).json({message:"Please login."})
  }
  next()
}