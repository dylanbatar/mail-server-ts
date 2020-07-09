# MAIL SERVER 🗄 📨
Ejemplo de servidor de para mandar correos hecho con Node + TypeScript e implementando [nodeMailer](https://nodemailer.com/about/)

![last-commit](https://img.shields.io/github/last-commit/dylanbatar/mail-server-ts) ![followers github](https://img.shields.io/github/followers/dylanbatar?style=social) ![twitter follow](https://img.shields.io/twitter/follow/dylanbatar?style=social)




## INSTALACIÓN ⚙️
1. Ejecuta el comando `npm i` para reconstruir los modulos de node que usa el proyecto
2. Asegurate de tener corriendo mongoDB para guardar la informacion del usuario que hice el llamado de tu endPoing __NOTA__: Si no quieres optener esta informacion solo remueve el metodo de mandar mail del archivo <code>routes/index.routes.ts</code> y elimina el metodo `save`.
3. Ejecuta `npm start` y tu servidor de correos esta listo para funcionar de manera local.

## CONFIGURACION 🛠
Para mandar correos en caso de que quieras usar servicio de gmail solo ir al archivo <code>clasess/emails.ts</code>
![image](https://i.ibb.co/hXFQBpM/carbon.png)

En caso de que cuentes con tu propio provedor de correos puedes utilizar configurarlo de esta manera
![image custom](https://i.ibb.co/DbGV3kr/carbon-2.png)


