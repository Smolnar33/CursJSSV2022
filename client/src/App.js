import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import Chat from "./chat";

function App() {
    const [connectedSocket, setConnectedSocket] = useState();

  useEffect(() => {
    const socket = io();

    socket.on("connected", () => {
      setConnectedSocket(socket);
    });

  }, []);

  if (!connectedSocket) {
    return <p>Waiting for connection...</p>;
  }

  return (
    <div className="main">
      <h1>Tema Curs 4</h1>
      <Chat socket={connectedSocket} />
    </div>
  );
}

export default App;
