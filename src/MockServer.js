// mockServer.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Create a db.json file with your mock data
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3031, () => {
  console.log("JSON Server is running");
});
