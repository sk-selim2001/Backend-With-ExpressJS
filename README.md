# 🚀 Express.js Basics: Understanding Middleware and Routes

Welcome to my beginner-friendly guide on Express.js! If you are just starting your backend journey, this article will break down exactly what **Middleware** and **Routes** are, how they work together, and how to write your first Express server in simple, easy-to-understand terms.

---

## 📑 Table of Contents
1. [What Exactly is "Middleware"?](#1-what-exactly-is-middleware)
2. [What Exactly is a "Route"?](#2-what-exactly-is-a-route)
3. [The Code: Line-by-Line Breakdown](#3-the-code-line-by-line-breakdown)
4. [⚠️ Important Setup Gotcha (ES Modules)](#4-⚠️-important-setup-gotcha-es-modules)
5. [🏃 How to Run This Project](#5-🏃-how-to-run-this-project)
6. [🔑 Key Takeaways for Revision](#6-🔑-key-takeaways-for-revision)

---

## 1. What Exactly is "Middleware"?

Before we look at the code, let’s understand the concept. 

Imagine your Express server is a **large restaurant**. 
- A **Middleware** is like a security guard at the entrance, or a waiter who checks your order before it goes to the kitchen. 
- Every single request (customer) that comes into the restaurant *must* pass through these checkpoints in the exact order they are set up.
- The middleware can do things like: check if the customer has a reservation (authentication), log the time they arrived (logging), or modify their order before it reaches the kitchen.

In web development, **middleware** is simply a function that has access to the request object (`req`), the response object (`res`), and the `next` function. It can:
1. Execute any code.
2. Make changes to the request and response objects.
3. End the request-response cycle (e.g., send an error if a user is not logged in).
4. Call `next()` to pass control to the next middleware function or route.

---

## 2. What Exactly is a "Route"?

If middleware is the security checkpoint, the **Route** is the final destination (like the kitchen counter handing you your food). 

A route is a rule that tells the server: *"After the request has passed through all the middleware, if the user is at this specific URL (path), send them this specific response."*

In our code, we are creating four different "destinations":
- `/` → The main entrance (Home page)
- `/profile` → The user profile page
- `/menu` → The menu page
- `/blog/blog1` → A specific blog post

---

## 3. The Code: Line-by-Line Breakdown

Here is the complete code (`script.js`), followed by a simple explanation of what each part does.

```javascript
import express from "express";

const app = express();

// --- MIDDLEWARE SECTION ---
app.use(function (req, res, next) {
  console.log("This is our first middleware");
  next();
});

app.use(function (req, res, next) {
  console.log("This is our second middleware");
  next();
});

// --- ROUTES SECTION ---
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