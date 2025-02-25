import { connectionBroker } from "../connections/mqtt";
import createUserHandler from "./handler/createUserHandler";
import loginUserHandler from "./handler/loginUserHandler";

const client = connectionBroker();

export function subscriberAll() {
  client.subscribe("#", { qos: 2 });

  client.on("message", (topic: string, message: Buffer) => {
    const data = JSON.parse(message.toString());
    switch (topic) {
      case "cg.user.create":
        createUserHandler(data);
        break;
      case "cg.user.login":
        loginUserHandler(data);
        break;
    }
  });
}
