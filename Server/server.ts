import express from "express";
import cors from "cors";
import {
  PostDashboard,
  GetDashboard,
  PostOut,
  GetOut,
  GetSimplePage,
  PostUser,
  PostLogin,
  GetUser,
  PostChattingId,
  GetChatting,
  PostSetting,
  GetSettings,
  PostSettingId,
  PostShoppingId,
  GetShopping,
  PostGame,
  PostProduct,
  GetProduct,
  PostCreateProduct,
  PostBasket,
  GetBasket,
  GetAllUsers,
  GetGame,
  PostRecord,
} from "./src/functions";
import { PostMath } from "./src/games";

const server = express();
const PORT = 8080;
server.use(express.json());
server.use(cors());
server.use(express.urlencoded({ extended: true }));
// Dashboard Post
const user: string[] = [];

server.post("/dashboard", PostDashboard);

server.get("/dashboard/:id", GetDashboard);

// Post for Log Out
server.post("/out", PostOut);

// Get for Log Out
server.get("/out", GetOut);

// Simple Page
server.get("/", GetSimplePage);

// Post
server.post("/users", PostUser);

server.post("/login", PostLogin);

server.get("/user", GetUser);

// Chatting

server.post("/chatting/:id", PostChattingId);
// Get chatting page
server.get("/chatting", GetChatting);

// Settings input ID

server.post("/settings", PostSetting);

server.get("/settings", GetSettings);

server.post("/setting/:id", PostSettingId);

//Shopping GET Method
server.post("/shopping/:id", PostShoppingId);

server.get("/shopping", GetShopping);

// For me to Author
server.post("/product", PostProduct);

server.get("/product", GetProduct);

// Create product
server.post("/createProduct", PostCreateProduct);

// Basket Post Method
server.post("/basket", PostBasket);

server.get("/basket", GetBasket);

// Get All Users
server.get("/allUsers", GetAllUsers);

// Post to Game
server.post("/game", PostGame);

server.get("/game", GetGame);

server.post("/record", PostRecord);
server.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});
