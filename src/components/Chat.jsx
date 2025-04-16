import { useState, useEffect } from "react";
import { sendMessage, getMessages } from "../api";

export default function Chat({ token }) {
  const [receiverId, setReceiverId] = useState("");
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState([]);

  const fetchChat = async () => {
    const msgs = await getMessages(token, receiverId);
    setMessages(msgs);
  };

  return (
    <div className="p-4 flex flex-col gap-2">
      <input placeholder="ID собеседника" onChange={(e) => setReceiverId(e.target.value)} />
      <button onClick={fetchChat}>Получить сообщения</button>

      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>{msg.content}</li>
        ))}
      </ul>

      <input placeholder="Сообщение" onChange={(e) => setContent(e.target.value)} />
      <button onClick={() => sendMessage(token, receiverId, content)}>Отправить</button>
    </div>
  );
}
