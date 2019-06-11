const http = require('http')
const blob = ""
const url = new URL("")
let req = http.request(url, (res) => {
  res.setEncoding('utf8')
  res.on('data', (chunk) => {
    blob += chunk
  })
  res.on('end', () => {

  })
})