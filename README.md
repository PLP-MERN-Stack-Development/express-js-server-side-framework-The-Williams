# 🚀 Express.js RESTful API – Week 2 Assignment

This project is a **RESTful API** built using **Express.js** for managing products.  
It demonstrates key backend development concepts such as routing, middleware, authentication, validation, error handling, and query features like filtering and pagination.

---

## 📘 Objective

To build a fully functional **Express.js API** that performs CRUD operations, implements middleware, handles errors gracefully, and supports advanced query features.

---

## 🧩 Features

✅ Create, Read, Update, and Delete (CRUD) operations  
✅ Route organization using Express Router  
✅ Middleware for logging, authentication, and validation  
✅ Centralized error handling and custom error classes  
✅ Environment variable configuration using dotenv  
✅ Filtering, pagination, and search functionality  
✅ Product statistics endpoint  
✅ Ready for testing with Postman or curl  

---

## 🗂️ Project Structure

```

express-products-api/
├─ server.js
├─ package.json
├─ .env
├─ .env.example
├─ .gitignore
├─ README.md
├─ data/
│  └─ products.js
├─ routes/
│  └─ products.js
├─ controllers/
│  └─ productsController.js
├─ middleware/
│  ├─ logger.js
│  ├─ auth.js
│  ├─ validateProduct.js
│  └─ errorHandler.js
└─ utils/
└─ asyncHandler.js

````

---

## ⚙️ Setup Instructions

### 1. Install Node.js
Make sure Node.js (v18 or higher) is installed on your system.  
Check with:
```bash
node -v
npm -v
````

### 2. Clone Your Repository

If this is part of your GitHub Classroom assignment:

```bash
git clone <https://github.com/PLP-MERN-Stack-Development/express-js-server-side-framework-The-Williams.git>
cd express-products-api
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Your `.env` file should contain:

```
PORT=3000
API_KEY=mysecretapikey123
```

### 5. Start the Server

In development mode (auto restarts):

```bash
npm run dev
```

Or normal mode:

```bash
npm start
```

---

## 🌐 API Endpoints

### 📄 Products CRUD

| Method     | Endpoint              | Description                                            | Auth Required |
| ---------- | --------------------- | ------------------------------------------------------ | ------------- |
| **GET**    | `/api/products`       | Get all products (supports filter, search, pagination) | ❌             |
| **GET**    | `/api/products/:id`   | Get a specific product by ID                           | ❌             |
| **POST**   | `/api/products`       | Create a new product                                   | ✅             |
| **PUT**    | `/api/products/:id`   | Update an existing product                             | ✅             |
| **DELETE** | `/api/products/:id`   | Delete a product                                       | ✅             |
| **GET**    | `/api/products/stats` | Get product count by category                          | ❌             |

---

## 🔍 Query Parameters

You can filter and paginate results with query parameters:

| Parameter  | Example                              | Description                 |
| ---------- | ------------------------------------ | --------------------------- |
| `category` | `/api/products?category=electronics` | Filter by category          |
| `search`   | `/api/products?search=laptop`        | Search by product name      |
| `page`     | `/api/products?page=2`               | Pagination (page number)    |
| `limit`    | `/api/products?limit=5`              | Number of products per page |

---

## 📬 Example Requests

### 🟢 Get All Products

```bash
GET http://localhost:3000/api/products
```

Response:

```json
{
  "total": 3,
  "page": 1,
  "products": [
    { "id": "1", "name": "Laptop", "price": 1200 },
    { "id": "2", "name": "Smartphone", "price": 800 }
  ]
}
```

### 🟢 Get a Product by ID

```bash
GET http://localhost:3000/api/products/1
```

### 🟡 Create a New Product

```bash
POST http://localhost:3000/api/products
Headers:
  Content-Type: application/json
  x-api-key: mysecretapikey123

Body:
{
  "name": "Tablet",
  "description": "Android tablet",
  "price": 300,
  "category": "electronics",
  "inStock": true
}
```

### 🟠 Update a Product

```bash
PUT http://localhost:3000/api/products/1
Headers:
  Content-Type: application/json
  x-api-key: mysecretapikey123

Body:
{
  "price": 1300,
  "inStock": false
}
```

### 🔴 Delete a Product

```bash
DELETE http://localhost:3000/api/products/2
Headers:
  x-api-key: mysecretapikey123
```

### 🧮 Get Product Statistics

```bash
GET http://localhost:3000/api/products/stats
```

Response:

```json
{
  "electronics": 2,
  "kitchen": 1
}
```

---

## 🧰 Middleware Overview

### 🕒 `logger.js`

Logs request method, URL, and timestamp.

### 🔐 `auth.js`

Checks for a valid API key in the `x-api-key` header.

### ✅ `validateProduct.js`

Ensures product data includes required fields (`name`, `price`, `category`).

### 🚨 `errorHandler.js`

Global error handler that catches all thrown errors and formats the response.

---

## ⚠️ Error Handling

Custom errors are thrown using the `AppError` class.

Example response:

```json
{
  "error": "Product not found"
}
```

Supported status codes:

* **400** – Bad Request
* **401** – Unauthorized
* **404** – Not Found
* **500** – Internal Server Error

---

## 🧪 Testing

Use **Postman**, **Insomnia**, or **curl** to test the API.

Example curl request:

```bash
curl -X GET http://localhost:3000/api/products
```

To test protected routes:

```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -H "x-api-key: mysecretapikey123" \
  -d '{"name":"Headphones","price":150,"category":"electronics"}'
```

---

## 🧾 Submission Instructions

1. Accept the GitHub Classroom assignment link
2. Clone your personal repository
3. Add all project files (`server.js`, routes, middleware, etc.)
4. Add this `README.md` file
5. Add `.env.example` file
6. Commit and push your code to GitHub

Your submission will be automatically graded and reviewed by your instructor.

---

## 📚 Resources

* [Express.js Documentation](https://expressjs.com/)
* [RESTful API Best Practices](https://restfulapi.net/)
* [MDN HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
* [Node.js Docs](https://nodejs.org/en/docs)

---

## 👨‍💻 Author

**Name:** The-Williams
**Cohort:** July 2025 PLP Full-Stack Development
**Week 2:** Express.js – Server-Side Framework
