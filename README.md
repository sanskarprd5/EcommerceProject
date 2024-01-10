**E-commerce Product Catalog Backend API**

**Overview**

This project is a backend API for an E-commerce Product Catalog. It provides functionality for user authentication, product management, and shopping cart operations.
The API is built using Node.js, Express, and MongoDB.

**Authentication**

Implements user authentication using JSON Web Tokens (JWT).
Provides endpoints for user registration and login.
Secures certain API routes requiring a valid token for access.

**Product Management**

Endpoints for retrieving a list of products, individual product details, and adding products.

**Shopping Cart**

API endpoints for managing the shopping cart (adding/removing items, updating quantities).

**Database Integration**

MongoDB database is used to store product information, user details, and order history.

**Middleware**

Middleware functions for logging requests and handling errors gracefully.
Authorization check to ensure only authorized users can access the database.

**API collection**

Find the below json file to access APIs:

[e-commerce.postman_collection.json](https://github.com/sanskarprd5/EcommerceProject/files/13886349/e-commerce.postman_collection.json)
