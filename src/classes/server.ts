import express from "express";
import { PORT } from "../global/enviroments";
import { router } from "../routes/index.routes";
import DB from "./db";

export default class Server {
  private static _instance: Server;
  private app: express.Application;
  public port: number;

  private constructor() {
    this.app = express();
    this.port = PORT;
  }

  public static get getInstance(): Server {
    return this._instance || (this._instance = new Server());
  }

  private routes(): void {
    this.app.use("/", router);
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  public start(callback: Function): void {
    this.config();
    this.routes();
    DB.conexion();
    this.app.listen(this.port, callback());
  }
}
