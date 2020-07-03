import { connect } from "mongoose";
import { URI_DB } from "../global/enviroments";

export default class DB {
  private static URI_DB: string = URI_DB;

  public static conexion(): void {
    connect(this.URI_DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
      .then(() => console.log("Conectado al bd"))
      .catch((err) => console.log("error en el bd"));
  }
}
