import nodemailer from "nodemailer";
import { IMail } from "../interfaces/mail.interface";

export default class Emails {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "email@gmail.com",
        pass: "contraseña",
      },
    });
  }

  sendMail(mail: IMail): void {
    return this.transporter.sendMail(mail, (err, result) => {
      if (err) {
        throw new Error("Error al mandar email" + err);
      }

      return result;
    });
  }
}
