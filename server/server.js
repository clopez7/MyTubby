const express = require('express')
const app = express()
const cors = require('cors')
const Pool = require('pg').Pool;

require('dotenv').config();

const dbConfig = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
}

//TODO 

//ENVIAR COOKIE IF LOGGED OUT, persistencia local

//Only DB calls if logged in


const pool = new Pool(dbConfig);

app.use(cors())
app.use("/", express.static("views"))
app.use(express.static("views"))
app.use("/styles", express.static("styles"))
app.use("/scripts", express.static("scripts"))


const getVideos = (request, response) => {
    var consulta = "SELECT * FROM VIDEOS;"
    pool.query(consulta, (error, results) => {
        if (error) {
            console.log(error);
        }
        response.status(200).json(results.rows)
    });

}

app.get('/videos', getVideos)
app.listen(3000)