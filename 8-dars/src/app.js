const express = require("express");
const compression = require("compression");
const { fetch, fetchOne } = require("./pg");
const app = express();

app.use(express.json());
app.use(compression());

app.post("/category", async (req, res) => {
  try {
    const { name } = req.body;
    await fetch("insert into categories (name) values ($1)", name);

    res.status(201).json({ message: "Success" });
  } catch (error) {
    console.log(error);
  }
});

app.get("/category", async (req, res) => {
  const categories = await fetch("select * from categories");

  res.json({ categories });
});

app.post("/product", async (req, res) => {
  try {
    const { name, price, category_id } = req.body;

    await fetch(
      "insert into products (name, price, category_id) values ($1, $2, $3)",
      name,
      price,
      category_id
    );

    res.status(201).json({ message: "Success" });
  } catch (error) {
    console.log(error);
  }
});

app.get("/product", async (req, res) => {
  const products = await fetch("select * from products");

  res.json({ products });
});

app.get("/products", async (req, res) => {
  const { category_id } = req.query;
  const products = await fetch(
    "select * from products where category_id = $1",
    category_id
  );

  res.json({ products });
});

// app.get("/", (req, res) => {
//   const obj = {
//     name: "Salom",
//     age: "12",
//     from: "Uzbekistan",
//   };

//   const arr = [];
//   arr.length = 5000;

//   arr.fill(obj, 0, 5000);

//   res.json(arr);
// });
app.listen(4000, () => {
  console.log(4000);
});
