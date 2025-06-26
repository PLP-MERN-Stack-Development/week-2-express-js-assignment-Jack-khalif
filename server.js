const express = require("express");
const morgan = require("morgan");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON
//middleware to protect routes
const auth = require("./middleware/auth");
app.use("/api/products", auth);

app.use(morgan("tiny")); // Logger

// In-memory database
let products = [];
let idCounter = 1;

// Routes
app.get("/", (req, res) => {
  res.send("Hello World from Express API!");
});

app.get("/api/products", (req, res) => {
  const { category, page = 1, limit = 5, search } = req.query;
  let result = [...products];

  if (category) result = result.filter(p => p.category === category);
  if (search) result = result.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  const start = (page - 1) * limit;
  const end = start + parseInt(limit);
  res.json(result.slice(start, end));
});
app.get("/api/products-stats", (req, res) => {
  const stats = {};
  products.forEach(p => {
    stats[p.category] = (stats[p.category] || 0) + 1;
  });
  res.json(stats);
});


app.get("/api/products/:id", (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});

app.post("/api/products", (req, res) => {
  const { name, description, price, category, inStock } = req.body;
  const newProduct = { id: idCounter++, name, description, price, category, inStock };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put("/api/products/:id", (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: "Product not found" });

  const { name, description, price, category, inStock } = req.body;
  Object.assign(product, { name, description, price, category, inStock });
  res.json(product);
});

app.delete("/api/products/:id", (req, res) => {
  products = products.filter(p => p.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "There is a Problem Jack!" });
});