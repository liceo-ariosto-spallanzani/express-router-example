const express = require("express")
const router = new express.Router()
const { getProduct } = require("../core/products")

router.get("/", (req, res) => {
  res.send("listing dei prodotti")
})

router.get("/:id", (req, res) => {
  const product = getProduct(req.params.id)

  if (product) {
    res.send(product)
  } else {
    res.status(404).send("<h1>Prodotto non trovato</h1>")
  }
})

router.post("/:id", (req, res) => {
  res.send(`aggiungi prodotto con id ${req.params.id}`)
})

router.delete("/:id", (req, res) => {
  res.send(`rimuovi prodotto con id ${req.params.id}`)
})

module.exports = router