require("dotenv").config()
const express = require("express")
const massive = require("massive")
const {read,create,remove} = require("./propertycontoller")

const app = express();
const {CONNECTION_STRING, SERVER_PORT} = process.env

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance)
    console.log("Database Connected")
})
.catch(error => console.log(error))

app.use(express.json())

app.get("/api/properties", read)
app.post("/api/properties", create)
app.delete("/api/properties/:id", remove)


app.listen(SERVER_PORT, () => console.log("Serever Listening"))