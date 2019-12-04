const Koa = require('koa');
const app = new Koa();
const proxy = require('koa-proxying');
const https = require('https');
const fs = require('fs');

const HTTPS_PORT = process.env.HTTPS_PORT || 443;

const options = {
  key: fs.readFileSync('./certs/server.key'),
  cert: fs.readFileSync('./certs/server.cert')
};
app.use(async ctx => {
  await proxy(ctx, {target: process.argv[2]});

});
https.createServer(options, app.callback()).listen(HTTPS_PORT);
console.log(`https server has started on port ${HTTPS_PORT} and proxies requests to ${process.argv[2]}`);
