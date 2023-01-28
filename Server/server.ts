import express from "express";
import {
  CheckingAuth,
  CheckingLogin,
  CheckingUserData,
} from "./Middlewares/middlewares";
import { GetUsers, Login, PostUser } from "./Functions/function";
const server = express();
const PORT = 8080;
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", CheckingAuth, GetUsers);

server.post("/register", CheckingUserData, PostUser);

server.post("/login", CheckingLogin, Login);
server.listen(PORT, () => {
  console.log(`SERVER: http://localhost:${PORT}`);
});
