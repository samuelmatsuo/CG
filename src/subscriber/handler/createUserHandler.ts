import User from "../../models/User";

export default async function createUserHandler(users: any) {
  //TODO FAZER VALIDAÇÃO PARA CRIAR O USUÁRIO
  await User.create(users);
}
