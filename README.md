[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19857300&assignment_repo_type=AssignmentRepo)
# Express.js RESTful API Assignment

This assignment focuses on building a RESTful API using Express.js, implementing proper routing, middleware, and error handling.

## Assignment Overview

You will:
1. Set up an Express.js server
2. Create RESTful API routes for a product resource
3. Implement custom middleware for logging, authentication, and validation
4. Add comprehensive error handling
5. Develop advanced features like filtering, pagination, and search

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Run the server:
   ```
   npm start
   ```

## Files Included

- `Week2-Assignment.md`: Detailed assignment instructions
- `server.js`: Starter Express.js server file
- `.env.example`: Example environment variables file

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Postman, Insomnia, or curl for API testing

## API Endpoints

The API will have the following endpoints:

- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a specific product
- `POST /api/products`: Create a new product
- `PUT /api/products/:id`: Update a product
- `DELETE /api/products/:id`: Delete a product

# PLP WEEK 2 EXPRESS JS ASSIGNMENT API

This is a simple Express.js API for managing products.  
Swagger documentation is available at [`/api-docs`](http://localhost:3000/api-docs).

---

## Endpoints

### Get All Products

**GET** `/api/products`

**Query Parameters:**
- `category` (optional): Filter by category
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 5)
- `search` (optional): Search by product name

**Example Request:**
```http
GET /api/products?category=Electronics&page=1&limit=2
```

**Example Response:**
```json
[
  {
    "id": 1,
    "name": "Phone",
    "description": "Smartphone",
    "price": 299,
    "category": "Electronics",
    "inStock": true
  }
]
```

---

### Get Product By ID

**GET** `/api/products/{id}`

**Example Request:**
```http
GET /api/products/1
```

**Example Response:**
```json
{
  "id": 1,
  "name": "Phone",
  "description": "Smartphone",
  "price": 299,
  "category": "Electronics",
  "inStock": true
}
```

---

### Create Product

**POST** `/api/products`

**Request Body:**
```json
{
  "name": "Laptop",
  "description": "Gaming laptop",
  "price": 1200,
  "category": "Electronics",
  "inStock": true
}
```

**Example Response:**
```json
{
  "id": 2,
  "name": "Laptop",
  "description": "Gaming laptop",
  "price": 1200,
  "category": "Electronics",
  "inStock": true
}
```

---

### Update Product

**PUT** `/api/products/{id}`

**Request Body:**
```json
{
  "name": "Laptop Pro",
  "description": "High-end gaming laptop",
  "price": 1500,
  "category": "Electronics",
  "inStock": false
}
```

**Example Response:**
```json
{
  "id": 2,
  "name": "Laptop Pro",
  "description": "High-end gaming laptop",
  "price": 1500,
  "category": "Electronics",
  "inStock": false
}
```

---

### Delete Product

**DELETE** `/api/products/{id}`

**Example Request:**
```http
DELETE /api/products/2
```

**Example Response:**
- Status: `204 No Content`

---

### Product Stats

**GET** `/api/products-stats`

**Example Response:**
```json
{
  "Electronics": 2,
  "Books": 1
}
```

---

## Error Example

**Product Not Found:**
```json
{
  "error": "Product not found"
}
```
### Example POST request in Postman

![Postman POST Example](images/POST.png)

### Swagger UI

![Swagger UI Screenshot](images/swaggerapiPLP.png)