import express from "express";
import {
  CheckingAuth,
  CheckingLogin,
  CheckingUser,
  CheckingUserData,
  CheckAdmin,
  Checking_the_Product,
  Cheacking_Admin_For_Creating_Product
} from "./Middlewares/middlewares";
import {
  GetById,
  GetUsers,
  Login,
  PostUser,
  DeleteUser,
  UserToAdmin,
  Get_All_Products,
  Add_Products,
  Create_Type_Product
} from "./Functions/function";
const server = express();
const PORT = 8080;
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//     Users

server.get("/user", CheckingAuth, GetUsers);

server.post("/user/register", CheckingUserData, PostUser);

server.post("/user/login", CheckingLogin, Login);

server.get("/user/:id", CheckingUser, GetById)

server.delete("/user/:ids", CheckAdmin, DeleteUser)

server.post('/admin/:id', UserToAdmin)

//           Products 

server.get('/products', Get_All_Products)

server.post('/products', Checking_the_Product, Add_Products)

server.post("/create_Product",
  Cheacking_Admin_For_Creating_Product,
  Checking_the_Product,
  Create_Type_Product)
server.listen(PORT, () => {
  console.log(`SERVER: http://localhost:${PORT}`);
});