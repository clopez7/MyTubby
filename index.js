var express = require('express')
const app = express()

app.use("/",express.static("views"))
app.use(express.static("views"))
app.use("/styles",express.static("styles"))
app.use("/scripts",express.static("scripts"))


app.listen(3000)
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/index.html'), function(err) {
})
})