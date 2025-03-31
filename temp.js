
// const express = require('express');
// const bodyParser = require('body-parser');
// const net = require('net');
// const cors = require('cors');
// const path = require('path');

// const app = express();
// const PORT = 3000;
// const DEVICE_URL = '192.168.4.1';
// const DEVICE_PORT = 100;
// const COMMANDS = {
//   "w": `POST / HTTP/0.9\r\nContent-Length: 29\r\n\r\n{"N":102,"D1":1,"D2":150}`,
//   "s": `POST / HTTP/0.9\r\nContent-Length: 29\r\n\r\n{"N":102,"D1":2,"D2":150}`,
//   "a": `POST / HTTP/0.9\r\nContent-Length: 29\r\n\r\n{"N":102,"D1":3,"D2":150}`,
//   "d": `POST / HTTP/0.9\r\nContent-Length: 29\r\n\r\n{"N":102,"D1":4,"D2":150}`,
//   "CLEAR": `POST / HTTP/0.9\r\nContent-Length: 13\r\n\r\n{"N":100}`
// };

// let client = null;
// let isConnected = false;

// app.use(bodyParser.json());
// app.use(cors());
// app.use(express.static(path.join(__dirname, '..')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'index.html'));
// });

// app.post('/', (req, res) => {
//   const { command, action} = req.body;
//   if (!COMMANDS[command]) {
//     return res.status(400).json({ error: 'Invalid command' });
//   }

//   if (!client) {
//     client = new net.Socket();

//     client.connect(DEVICE_PORT, DEVICE_URL, () => {
//       isConnected = true;
//       console.log(`Connected to ${DEVICE_URL}:${DEVICE_PORT}`);
//     });

//     client.on('data', (data) => {
//       console.log('Data received: ', data.toString());
//     });

//     client.on('close', () => {
//       console.log('Connection closed');
//       isConnected = false;
//       client = null;
//     });

//     client.on('error', (err) => {
//       console.error('Socket error:', err);
//       isConnected = false;
//       client = null;
//     });
//   } 
  
//   if(isConnected) {
//     console.log(`Sending command: ${command}`);
//     if(action == 'start')
//       client.write(COMMANDS[command]);
//     else
//       client.write(COMMANDS['CLEAR']);
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const net = require('net');
// // const cors = require('cors');
// // const path = require('path')

// // let client = null;
// // const app = express();
// // const PORT = 3000;
// // const DEVICE_URL = '192.168.4.1';
// // const DEVICE_PORT = 100;
// // const COMMANDS = {
// //   "w": `POST / HTTP/1.1 {"N":102,"D1":1,"D2":150} Connection: keep-alive`,
// //   "s": `{"N":102,"D1":2,"D2":150} \r\n`,
// //   "a": `{"N":102,"D1":3,"D2":150} \r\n`,
// //   "d": `{"N":102,"D1":4,"D2":150} \r\n`,
// //   "CLEAR": `{"N":100}`,
// // };

// // app.use(bodyParser.json());
// // app.use(cors());
// // app.use(express.static(path.join(__dirname, '..')))

// // app.get('/', (req, res) => {
// //   res.sendFile(path.json(__dirname, '..', 'index.html'));
// // });

// // app.post('/', (req, res) => {
// //   const { command } = req.body;
// //   if (!COMMANDS[command]) { 
// //     return res.status(400).json({ error: 'Invalid command' }); 
// //   } 

// //   client = new net.Socket();
// //   client.connect(DEVICE_PORT, DEVICE_URL, () => {
// //     console.log(`Connected to ${DEVICE_URL}:${DEVICE_PORT}`);
// //     client.write(COMMANDS["CLEAR"]);
// //   });

// //   client.on('data', (data) => {
// //     console.log('Data recieved: ', data.toString());
// //     client.write(COMMANDS[command]);
// //   });
  
// //   client.on('close', () => {
// //     console.log('Connection closed');
// //     client.destroy();
// //   });
  
// //   client.on('error', (err) => {
// //     console.error('Socket error:', err);
// //   });
// // });

// // app.listen(PORT, () => {
// //   console.log(`Server is running on http://localhost:${PORT}`);
// // });

// // // setInterval(() => {
// // //   while(client.writable && COMMANDQUEUE.length > 0){
// // //     client.write(COMMANDQUEUE.shift() + "\n");
// // //   }
// // // }, 1000)

// // // const COMMANDS = {
// // //   "a": `POST / HTTP/0.9\r\n\r\n{"H": "1","N":3,"D1":1,"D2":250}`,
// // //   "w": `POST / HTTP/0.9\r\n\r\n{"H": "1","N":1,"D1":0,"D2":250,"D3":1}`,
// // //   "s": `POST / HTTP/0.9\r\n\r\n{"H": "1","N":1,"D1":0,"D2":250,"D3":2}`,
// // //   "d": `POST / HTTP/0.9\r\n\r\n{"H": "1","N":3,"D1":2,"D2":250}`,
// // //   "CLEAR": `POST / HTTP/0.9\r\n\r\n{"N":100}`,
// // // };
