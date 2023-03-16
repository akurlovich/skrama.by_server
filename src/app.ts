import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import expressWS from 'express-ws';
import fileUpload from 'express-fileupload';
import router from './router/index';
import errorMiddleware from './middlewares/error-middleware';
import config from './common/config';

<!doctype html><html lang="en"><head><meta charset="utf-8"/><link rel="icon" href="/favicon.ico"/><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="theme-color" content="#000000"/><meta name="description" content="Web site created using create-react-app"/><title>Поликарбонат</title><script defer="defer" src="/static/js/main.8a6c8f40.js"></script><link href="/static/css/main.0d500a0f.css" rel="stylesheet"></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div></body></html>

// interface IMSGProps {
//   id: string,
//   bookTitle: string,
//   method: string,
// };

const appBase = express();
const wsInstance = expressWS(appBase);
const { app } = wsInstance;
// const aWss = wsInstance.getWss();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: [config.CLIENT_URL, 'http://skrama24.by', 'http://localhost:3000']
}));
app.use('/api', router);
// app.use(errorMiddleware);

// app.ws('/', (ws, req) => {
//   ws.on('message', (msg: string) => {
//     const msgClient: IMSGProps = JSON.parse(msg);

//     switch (msgClient.method) {
//       case 'connection': 
//         connectionHandler(ws, msgClient);
//         break;
//     }
//   })
// });

// const connectionHandler = (ws: any, msg: IMSGProps) => {
//   aWss.clients.forEach(client => {
//     client.send(JSON.stringify(msg))
//   })
// };



mongoose
  .connect(config.DB_CONNECT, {})
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err));

export default app;
