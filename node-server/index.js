import express  from "express";
import Connection from "./Databse/dbCon.js";
import dotenv from 'dotenv'
// import Routes from './routes/Routes.js'
import cors from 'cors';
import bodyparser from 'body-parser'
import routes from './Routes/routes.js'

const app = express();
app.use(cors());
app.use(bodyparser.json());
dotenv.config();

app.use('/', routes)



const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password)

const PORT = 8000
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
});
