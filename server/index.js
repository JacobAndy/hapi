"use strict";

const Hapi = require("hapi"),
  server = Hapi.server({ port: 3001, host: "localhost" }),
  axios = require("axios");

server.route({
  method: "GET",
  path: "/",
  handler: (request, reply) => {
    // return "HELLO WORLD! -Hapi";
    // return h.file("./src/App.js");
    const data = {
      key: "value",
      another: false,
      number: 10,
      func: function() {
        return this.number * 10;
      }
    };
    return data;
  }
});
server.route({
  method: "GET",
  path: "/starwars",
  handler: (request, h) => {
    // axios
    //   .get("https://swapi.co/api/people")
    //   .then(people => people.results)
    //   .catch(err => console.log(err));
  }
});
const init = async () => {
  //   await server.register({
  //     plugin: require("hapi-pino"),
  //     options: {
  //       prettyPrint: true,
  //       logEvents: ["response"]
  //     }
  //   });
  await server.register(require("inert"));

  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};
process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
