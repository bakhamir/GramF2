import React, { useState } from 'react';
import './App.css';

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');
  const [messages, setMessages] = useState([]);
  const [token, setToken] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  // 🔐 Заглушка для регистрации
  const register = () => {
    // Тут должен быть запрос: POST /auth/register
    // fetch('/auth/register', { method: 'POST', body: ... })
    console.log("Эмуляция регистрации");
    setToken("fake-jwt-token");
    setLoggedIn(true);
  };

  // 🔐 Заглушка для логина
  const login = () => {
    // Тут должен быть запрос: POST /auth/login
    // fetch('/auth/login', { method: 'POST', body: ... }) → получить токен
    console.log("Эмуляция логина");
    setToken("fake-jwt-token");
    setLoggedIn(true);
    loadMessages(); // Имитация загрузки сообщений
  };

  // 💬 Заглушка для загрузки сообщений
  const loadMessages = () => {
    // Тут должен быть запрос: GET /messages/get?senderId=X&receiverId=Y
    console.log("Эмуляция загрузки сообщений");
    setMessages([
      { id: 1, sender: "Вы", content: "Привет!" },
      { id: 2, sender: "Пользователь", content: "Привет! Как дела?" }
    ]);
  };

  // 📤 Заглушка для отправки сообщений
  const sendMessage = () => {
    // Тут должен быть запрос: POST /messages/send
    console.log("Эмуляция отправки сообщения");
    const newMessage = {
      id: Date.now(),
      sender: "Вы",
      content
    };
    setMessages([...messages, newMessage]);
    setContent('');
  };

  if (!loggedIn) {
    return (
      <div className="container">
        <h1>Добро пожаловать</h1>
        <input
          type="text"
          placeholder="Номер телефона"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={register}>Зарегистрироваться</button>
        <button onClick={login}>Войти</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Мессенджер</h1>
      <div>
        <ul>
          {messages.map(msg => (
            <li key={msg.id}><strong>{msg.sender}:</strong> {msg.content}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Введите сообщение..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={sendMessage}>Отправить</button>
      </div>
    </div>
  );
}

export default App;
