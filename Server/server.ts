import express from "express";
import {
  CheckingAuth,
  CheckingLogin,
  CheckingUser,
  CheckingUserData,
} from "./Middlewares/middlewares";
import { GetById, GetUsers, Login, PostUser,DeleteUser} from "./Functions/function";
const server = express();
const PORT = 8080;
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", CheckingAuth, GetUsers);

server.post("/register", CheckingUserData, PostUser);

server.post("/login", CheckingLogin, Login);

server.get("/:id",CheckingUser,GetById)

server.delete("/:id",DeleteUser)
server.listen(PORT, () => {
  console.log(`SERVER: http://localhost:${PORT}`);
});


``