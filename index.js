const express = require("express")
const productsRouter = require("./routers/products")

const app = new express()
const bodyParser = require("body-parser")
// app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("home page")
})

app.use("/products", productsRouter)

app.listen(8080, () => console.log("listening on port 8080"))