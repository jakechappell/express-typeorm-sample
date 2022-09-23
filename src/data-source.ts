import "reflect-metadata"
import { DataSource } from "typeorm"
import { Jokes } from "./entity/JokeEntity"

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "localhost",
    port: 1434,
    username: "example",
    password: "example",
    database: "Jokes",
    synchronize: false,
    entities: [Jokes],
    options: {
        encrypt: false
    }
})
