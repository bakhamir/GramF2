import { useState } from "react";
import { login, register } from "../api";

export default function AuthForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const data = await login(username, password);
    onLogin(data.token);
  };

  const handleRegister = async () => {
    await register(username, password);
    alert("Регистрация успешна");
  };

  return (
    <div className="p-4 flex flex-col gap-2">
      <input placeholder="Ваш Номер" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Войти</button>
      <button onClick={handleRegister}>Зарегистрироваться</button>
    </div>
  );
}
