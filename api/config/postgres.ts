import pg from "pg";

const Pool = pg.Pool;
const pool = new Pool({
  user: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.DB_NAME,
  host: "localhost",
  port: 5432,
});

export default pool;
