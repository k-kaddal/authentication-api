require("dotenv").config();
import express from "express";
import config from "config";
import connectToDb from "./utils/connect";
import log from "./utils/logger";
import router from "./routes";

const app = express();

app.use(router);

const port = config.get("port");

app.listen(port, () => {
  log.info(`Server running at http://localhost:${port}`);

  connectToDb();
});
