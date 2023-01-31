import express from "express";
import {
  CheckingAuth,
  CheckingLogin,
  CheckingUser,
  CheckingUserData,
  CheckAdmin,
  Checking_Admin,
  Checking_Product,
  Checking_User,
} from "./Middlewares/middlewares";
import {
  GetById,
  GetUsers,
  Login,
  PostUser,
  DeleteUser,
  UserToAdmin,
  Get_Products,
  creating_Product,
  Deleting_Product,
  Patch_Product,
  Get_Basket,
  Post_Basket_Product,
  delete_Basket_Product,
} from "./Functions/function";
import { prisma } from "@prisma/client";
const server = express();
const PORT = 8080;
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//     Users

server.get("/user", CheckingAuth, GetUsers);

server.post("/user/register", CheckingUserData, PostUser);

server.post("/user/login", CheckingLogin, Login);

server.get("/user/:id", CheckingUser, GetById);

server.delete("/user/:ids", CheckAdmin, DeleteUser);

server.post("/admin/:id", UserToAdmin);

//           Products

server.get("/product", Get_Products);

server.post("/product/:id", Checking_Admin, Checking_Product, creating_Product);

server.delete("/product/:id", Checking_Admin, Deleting_Product);

server.patch("/product/:id", Checking_Admin, Patch_Product);

//           Basket

server.get("/basket/:user", CheckingUser, Get_Basket);

server.post("/basket/:user", CheckingUser, Post_Basket_Product);

server.delete("/basket/:user", Checking_User, delete_Basket_Product);

server.listen(PORT, () => {
  console.log(`SERVER: http://localhost:${PORT}`);
});

// adburasulovhasanboy2
// 9311672812
