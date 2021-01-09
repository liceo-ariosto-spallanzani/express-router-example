const e = module.exports

e.getProduct = (id) => {
  //query a mysql
  // nel caso trovi un dato:
  const product = {
    id: id,
    name: "Scarpe",
    prezzo: 10
  }
  // nel caso non trovi un dato

  if (product) {
    return `<h1>${product.name}</h1><p>${product.prezzo}$</p>`
  } else {
    return null
  }
}