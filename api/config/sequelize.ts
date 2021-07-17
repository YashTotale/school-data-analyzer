// External Imports
import colors from "colors";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.DB_NAME,
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log(colors.green("Connected Sequelize"));
  } catch (e) {
    console.log(colors.red("Sequelize could not connect to the database"));
    console.error(e);
    process.exit(1);
  }
};

testConnection();

export default sequelize;
