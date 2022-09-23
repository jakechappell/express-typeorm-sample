import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import router from "./router/Joke"

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(express.json())
    // register express routes from defined application routes
    app.use(router)

    // start express server
    app.listen(3000)

    console.log("Express server has started on port 3000")

}).catch(error => console.log(error))
