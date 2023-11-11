const express = require('express');


const app = express();

const port = 4000;

app.get("/products", (req, res) => {
  res.send("product list");
});

app.post("/products", (req, res) => {
  res.send("creating product");
});

app.put("/products", (req, res) => {
  res.send("updating product");
});

app.delete("/products", (req, res) => {
  res.send("deleting product");
});

app.patch("/products", (req, res) => {
  res.send("updating a part of product");
});

app.use((req, res) => {
  res.status(404).send("Error, page not found");
});

app.listen(port);

console.log(`server running on port ${port}`);

