import express from 'express';
import next from 'next';
import bodyParser from 'body-parser'
const { setEnvies } = require('assets/envs/envs');
import { config } from './common/config';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  setEnvies();

  server.use(bodyParser.json());

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(config.PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${config.PORT}`)
  })
}).catch((e) => {
  console.error(e.stack)
  process.exit(1)
})