import Server from "./classes/server";

(() => {
  const server: Server = Server.getInstance;
  server.start(() => console.log("Server online on PORT ", server.port));
})();
