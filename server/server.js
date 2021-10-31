var express = require('express')
const app = express()
var cors = require('cors')
const Pool  =  require('pg').Pool;
// const { Pool } = require('pg')


const dbConfig = {
    user: 'carlos-lopez-7e4',
    host: 'postgresql-carlos-lopez-7e4.alwaysdata.net',
    database: 'carlos-lopez-7e4_mytubby',
    password: 'aY$=.Q2NqVAF<sg2J&W^&5.[ZaBZ9!}D',
    port: 5432,
}


const pool  =  new Pool(dbConfig);





app.use(cors())
app.use("/",express.static("views"))
app.use(express.static("views"))
app.use("/styles",express.static("styles"))
app.use("/scripts",express.static("scripts"))


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