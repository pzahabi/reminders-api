import express, { Express } from "express";
import reminders from "../routers/reminders";

export default class StartUp {
  static start(app: Express) {
    app.use(express.json());
    app.use("/reminders", reminders);

    app.get("/", (req, res) => {
      res.send("Hello World");
    });
  }
}

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PORT: string;
      }
    }
  }