import React, { useState } from 'react';
import AuthForm from './components/AuthForm';
import Chat from './components/Chat';
import './App.css';

function App() {
  const [showComponent, setShowComponent] = useState(null); // 'auth' | 'chat' | null

  return (
    <div className="container">
      <h1>Messenger Demo</h1>

      <div className="debug-buttons">
        <button onClick={() => setShowComponent('auth')}>Показать AuthForm</button>
        <button onClick={() => setShowComponent('chat')}>Показать Chat</button>
        <button onClick={() => setShowComponent(null)}>Скрыть всё</button>
      </div>

      {showComponent === 'auth' && (
        <AuthForm mode="login" />
      )}

      {showComponent === 'chat' && (
        <Chat />
      )}
    </div>
  );
}

export default App;
