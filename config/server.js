import express from "express"
import bodyParser from "body-parser"
import setRoutes from "../config/routes"
const server = express();

server.use(bodyParser.json())

setRoutes(server)

export default server;

