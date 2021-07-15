// Export Environment Variables
import { config } from "dotenv-safe";
config();

// External Imports
import express from "express";
import bodyParser from "body-parser";

// Internal Imports
import v1Router from "./v1";

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "School Data API" });
});

app.use("/api/v1", v1Router);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}.`);
  console.log("Press Ctrl+C to quit.");
});
