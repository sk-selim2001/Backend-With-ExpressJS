import express from "express";

const app = express();

// Middlewares
app.use(function (req, res, next) {
  console.log("This is our first middleware");
  next();
});

app.use(function (req, res, next) {
  console.log("This is our second middleware");
  next();
});

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/profile", (req, res) => {
  res.send("This is our profile route");
});

app.get("/menu", (req, res) => {
  res.send("This is our menu route");
});

app.get("/blog/blog1", (req, res) => {
  res.send("This is our blog post 1 route");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// Dynamic Routes
