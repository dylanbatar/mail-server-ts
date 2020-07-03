import { Router, Request, Response } from "express";

import { IClient } from "../interfaces/client.interface";
import CLIENT_MODEL from "../models/clients.model";
import Emails from "../classes/emails";

const router: Router = Router();
const mailer: Emails = new Emails();

router.post("/saveclient", async (req: Request, res: Response) => {
  const { name, email, category, phone } = req.body;

  const NEW_CLIENT: IClient = await new CLIENT_MODEL({
    name,
    email,
    category,
    phone,
  });

  NEW_CLIENT.save()
    .then((client: IClient) => {
      res.json({
        ok: false,
        data: client,
        message: "Cliente registrado",
      });
    })
    .catch((err) =>
      res.json({ ok: false, message: "Error al registrar cliente", err })
    );

  mailer.sendMail({
    from: "administrador@gmail.com",
    to: email,
    subject: "SERVIDOR EMAILS TS",
    text: "Mensaje desde servidor de mails",
  });
});

export { router };
