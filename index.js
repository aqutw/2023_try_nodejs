const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  //fs.appendFileSync('/tmp/0216x.txt', '{"xxx":1}');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
