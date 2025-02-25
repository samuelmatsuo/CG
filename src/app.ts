import { connectMongo } from "./connections/mongo";
import { connectionBroker } from "./connections/mqtt";

connectMongo();
connectionBroker();

console.log("Servidor iniciado!");
