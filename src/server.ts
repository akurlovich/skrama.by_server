import config from './common/config';
import app from './app';
import https from 'https';
import fs from 'fs';

// app.listen(config.PORT, () =>
//   console.log(`App is running on ${config.API_URL}${config.PORT}`)
// );

https
  .createServer(
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
    )
  .listen(config.PORT, ()=>{
    console.log(`App is running on ${config.API_URL}${config.PORT}`)
  });