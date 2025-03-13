// src/websocketServer.ts
import { WebSocketServer } from "ws";

export function startWebSocketServer() {
  // Cria uma nova instância do servidor WebSockets
  const wss = new WebSocketServer({ port: 8080 });

  // Evento que é disparado quando um novo cliente se conecta
  wss.on("connection", (ws) => {
    console.log("Novo cliente conectado");

    // Evento que é disparado quando o servidor recebe uma mensagem do cliente
    ws.on("message", (message) => {
      console.log("Mensagem recebida: %s", message);

      // Envia a mensagem de volta para o cliente
      ws.send(`Você disse: ${message}`);
    });

    // Evento que é disparado quando a conexão é fechada
    ws.on("close", () => {
      console.log("Cliente desconectado");
    });

    // Envia uma mensagem de boas-vindas para o cliente
    ws.send("Bem-vindo ao servidor WebSockets!");
  });

  console.log("Servidor WebSockets está escutando na porta 8080");
}
