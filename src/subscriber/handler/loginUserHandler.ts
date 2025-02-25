import bcrypt from "bcrypt";

export default async function loginUserHandler(users: any) {
  if (!users || !Array.isArray(users) || users.length === 0) {
    return { success: false, message: "Dados inválidos." };
  }

  const { email, password } = users[0];

  if (!email || !password) {
    return { success: false, message: "E-mail e senha são obrigatórios." };
  }

  try {
    const user = users.find((user: any) => user.email === email);

    if (!user) {
      return { success: false, message: "Usuário não encontrado." };
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return { success: false, message: "Senha incorreta." };
    }

    return { success: true, message: "Login bem-sucedido!", user };
  } catch (error) {
    console.error("Erro no login:", error);
    return { success: false, message: "Erro interno no servidor." };
  }
}
