import { Pool } from "pg"
export const pool = new Pool({
   database: "postgres",
   host: "localhost",
   port: 5432,
   user: "postgres",
   password: "1"
});