const net = require('net');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;
const DEVICE_URL = '192.168.4.1'; // WebSocket URL of the Arduino
const DEVICE_PORT = 100;
const COMMANDS = {
  "w": '{"N":102,"D1":1,"D2":255}',
  "s": '{"N":102,"D1":2,"D2":255}',
  "a": '{"N":102,"D1":3,"D2":255}',
  "d": '{"N":102,"D1":4,"D2":255}',
  "CLEAR": '{"N":100}',
  "i": '{"N":106,"D1":1}',
  "k": '{"N":106,"D1":2}',
  "j": '{"N":106,"D1":3}',
  "l": '{"N":106,"D1":4}',
};

let client;
let commandBuffer = COMMANDS["CLEAR"];

function connectToDevice() {
  client = new net.Socket();
 
  client.connect(DEVICE_PORT, DEVICE_URL, () => {
    console.log(`Connected to ${DEVICE_URL}`);
  });

  client.on('data', (data) => {
    console.log(`Received from device: ${data}`);
  });

  client.on('close', () => {
    console.log('Connection closed, attempting to reconnect...');
    connectToDevice();// Attempt to reconnect every 5 seconds
  });

  client.on('error', (error) => {
    console.error(`WebSocket error: ${error}`);
  });
}

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '..')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.post('/', (req, res) => {
  const { command, action } = req.body;

  if (!COMMANDS[command]) {
    return res.status(400).json({ error: 'Invalid command' });
  }

  if(client.writable) {
    if(action == "start")
      client.write(COMMANDS[command])
    else
      client.write(COMMANDS["CLEAR"]);
  } 
  res.status(200).json({message: 'Command received'});
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectToDevice();
});
