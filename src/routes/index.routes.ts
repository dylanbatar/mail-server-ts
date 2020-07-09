import { Router, Request, Response } from "express";

import { IClient } from "../interfaces/client.interface";
import CLIENT_MODEL from "../models/clients.model";
import { mailTemplate } from "../template/mail.template";
import Emails from "../classes/emails";

const router: Router = Router();
const mailer: Emails = new Emails();

router.post("/saveclient", async (req: Request, res: Response) => {
  const { name, email, category, phone, message } = req.body;

  console.log(req.body);

  const NEW_CLIENT: IClient = await new CLIENT_MODEL({
    name,
    email,
    category,
    phone,
  });

  NEW_CLIENT.save()
    .then((client: IClient) => {
      mailer.sendMail({
        from: "administrador@gmail.com",
        to: email,
        subject: "Zelect Resources",
        html: mailTemplate(name),
      });

      res.json({
        ok: true,
        data: client,
        message: "Cliente registrado",
      });
    })
    .catch((err) =>
      res.json({ ok: false, message: "Error al registrar cliente", err })
    );
});

export { router };
