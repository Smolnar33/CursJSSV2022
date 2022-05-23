import { useEffect, useState } from "react";

const Chat = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState([]);

  const addMessage = (message) => {
    setMessages((messages) => {
      return [...messages, message];
    });
  };

  const addUsername = (username) => {
    setUsername((username) => {
      return [username];
    });
  };

  useEffect(() => {
    socket.on("received-message", (message) => {
      addMessage(message);
    });

    socket.on("received-username", (username) => {
      console.log("Username " + username);
      addUsername(username);
    });
  }, []);

  const sendMessage = () => {
    socket.emit("new-message", message);
    setMessage("");
  };

  const sendUsername = () => {
    socket.emit("new-username", username);
    setUsername("");
  };

  const handleMessageInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleUsernameInputChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <div className="chat-box">
        {messages.map((message, index) => (
          <p className="message" key={`message-${index}`}>
            {message}
          </p>
        ))}
      </div>
      <input
        value={message}
        placeholder="Enter a message"
        type="text"
        onChange={handleMessageInputChange}
      ></input>
        <input
          value={username}
          placeholder="Enter your name"
          type="text"
          onChange={handleUsernameInputChange}
        ></input>
      <button onClick={sendMessage}>Send message!</button>
        <button onClick={sendUsername}>Enter your name!</button>
    </>
  );
};

export default Chat;
