import pg from "pg";

const Pool = pg.Pool;
const pool = new Pool({
  user: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.PG_HOST,
  port: parseInt(process.env.PG_PORT ?? "5432"),
});

export default pool;
