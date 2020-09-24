const Koa = require('./koa')

const app = new Koa()

app.use((req, res) => {
  res.writeHead(200)
  res.end('hello koa')
})

app.listen(3000, () => {
  console.log('server is listening on 3000')
})
