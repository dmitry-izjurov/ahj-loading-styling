const http = require('http');
const port = process.env.PORT || 7070;
const Koa = require('koa');
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const WS = require('ws');
const slow = require('koa-slow');
const news = {
  response: 'Все новости загружены',
  news: [
    {
      title: 'Новость 1',
      text: 'Очень интересный текст новости',
      img: 'Картинка',
      footer: 'Для footer'
    },
    {
      title: 'Новость 2',
      text: 'Очень интересный текст новости',
      img: 'Картинка',
      footer: 'Для footer'
    },
    {
      title: 'Новость 3',
      text: 'Очень интересный текст новости',
      img: 'Картинка',
      footer: 'Для footer'
    }
  ]};

const app = new Koa();
app.use(cors());

app.use(koaBody({
  urlencoded: true,
  multipart: true,
  json: true
}));

app.use(slow({ delay: 5000 }));

app.use(async (ctx) => { 
  const method  = ctx.request.querystring;
  
  switch (method) {
    case 'method=getNews':
      ctx.response.body = {response: news};
      return;
    
    default:
      ctx.response.status = 404;
      return;
    }
});

const server = http.createServer(app.callback());
server.listen(port);
