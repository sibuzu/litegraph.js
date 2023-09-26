const express = require('express')
const app = express()

app.use('/css', express.static('css'))
app.use('/src', express.static('src'))
app.use('/external', express.static('external'))
app.use('/editor', express.static('editor'))
app.use('/', express.static('editor'))

var port = 3000
app.listen(port, () => console.log(`Example app listening on http://127.0.0.1:${port}!`))
