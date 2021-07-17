// Export Environment Variables
import { config } from "dotenv-safe";
config();

// Set Environment
import ENVIRONMENT from "./config/environment";

// External Imports
import express from "express";
import bodyParser from "body-parser";
import colors from "colors";

// Internal Imports
import v1Router from "./v1";

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api/v1", v1Router);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(colors.green(`App listening on port ${PORT}.`));
  console.log(`Running on ${ENVIRONMENT} environment.`);
  console.log("Press Ctrl+C to quit.");
});
