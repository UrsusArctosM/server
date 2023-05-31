import express from 'express'
import { config } from 'dotenv'
import { rootRouter } from './routers/index.js'
import { sequelize } from './db.js'
import * as model from './model/model.js'
import cors from 'cors'

const mod = model;
config()
const app = express();

const PORT = process.env.PORT || 3333;
const HOST = process.env.HOST || 'localhost';

app.use(cors())
app.use(express.json())
app.use('/api', rootRouter)

const start = async() => {
    
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, HOST, () => {
        console.log(`Start server from http://${HOST}:${PORT}`)
    })
};
start()


