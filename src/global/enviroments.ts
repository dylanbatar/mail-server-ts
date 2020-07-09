export const PORT: number = Number(process.env.PORT) || 5000;
export const URI_DB: string = process.env.URI_DB
  ? process.env.URI_DB
  : "mongodb://localhost:27017/zelect-clients"
