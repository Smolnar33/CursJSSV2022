import { useEffect, useState } from "react";

const Chat = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("")

  const addMessage = (message) => {
    setMessages((messages) => {
      return [...messages, message];
    });
  };

  useEffect(() => {
    socket.on("received-message", (message) => {
      addMessage(message);
    });
  }, []);

  const sendMessage = () => {
    socket.emit("new-message", message);
    setMessage("");
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
    </>
  );
};

export default Chat;
