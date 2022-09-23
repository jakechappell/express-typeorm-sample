import "reflect-metadata"
import { DataSource } from "typeorm"
import { Jokes } from "./entity/JokeEntity"
import * as dotenv from "dotenv"
dotenv.config()

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "localhost",
    port: 1434,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: "Jokes",
    synchronize: false,
    entities: [Jokes],
    options: {
        encrypt: false
    }
})
