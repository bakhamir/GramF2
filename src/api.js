const API_URL = "http://localhost:8080/api";

export async function register(username, password) {
  return fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
}

export async function login(username, password) {
  const res = await fetch(`${API_URL}/auth/authenticate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
}

export async function sendMessage(token, receiverId, content) {
  return fetch(`${API_URL}/message/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ receiverId, content }),
  });
}

export async function getMessages(token, userId) {
  const res = await fetch(`${API_URL}/message/chat/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
}
