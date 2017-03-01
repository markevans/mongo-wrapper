var express = require('express'),
    app = express(),
    bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000

if (!process.env.MONGO_URI) {
  console.log("You need to provide the ENV variable MONGO_URI, e.g. 'mongodb://127.0.0.1:27017/some-db'")
  process.exit(1)
}
const MONGO_URI = process.env.MONGO_URI

app.use(bodyParser.urlencoded({extended: false}))

app.post('/', function (req, res) {
  res.send(req.body)
})

app.listen(PORT, function () {
  console.log('Mongo Wrapper listening on Port '+PORT+', wrapping mongodb with connection string "'+MONGO_URI+'"')
})