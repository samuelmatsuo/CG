import { connectMongo } from "./connections/mongo";
import { connectionBroker } from "./connections/mqtt";
import { subscriberAll } from "./subscriber/subscriberAll";

connectMongo();
connectionBroker();
console.log("Servidor iniciado!");

const client = connectionBroker();

// setInterval(() => {
//   const data = [{ name: "teste", email: "2jLbG@example.com", password: "123" }];

//   client.publish("cg.user.create", JSON.stringify(data), (error: Error) => {
//     if (error) {
//       console.log("aaaaaa" + error);
//     } else console.log("Enviado com sucesso!");
//   });
// }, 3 * 1000);

//subscriberAll();
