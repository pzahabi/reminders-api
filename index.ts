import express from "express";
import 'dotenv/config'
import StartUp from "./startup/StartUp";

const app = express();

StartUp.start(app);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});