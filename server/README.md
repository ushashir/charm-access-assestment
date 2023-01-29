# EXPRESS

### Setup

1. Use and setup the project with `yarn`.
2. Convert the project to Typescript.
3. Initialize tsconfig.
4. Create .gitignore file to ignore the node_modules
## Problem Description:

Create A basic Express application, that makes a CRUD operation (create, read, update, delete) using SQLite database, document and publish your endpoints using postman.
In this project, you’ll build a basic CRUD (Create, Read, Update, Delete) for an Ecommerce Application.

## Requirements:

IMPLEMENT AUTHORIZATION AND AUTHENTICATION: PROTECT ALL ROUTES. ONLY THE LOGGED-IN USERS CAN PERFORM THE FOLLOWING OPERATIONS

- You can add product.
- You can edit products.
- You can delete products.

## NOTE
 - Users must not be authenticated before viewing or browsing through products.

## How will I complete this project?

- Your aplication should be able to perform.
  - `GET` Request which returns all the data in your database
  - `POST` Request which adds data to your database
  - `PUT` Request which updates fields of a particular data using the id in database
  - `DELETE` Request which removes a particular data from your database using the id
- Host your application on Heroku.
- Data format example: This show the model for users and the products created by the user

```
[

 {
   fullname: 'john doe',
   email: 'john@example.com', // no duplicates allowed.
   gender:'m',
   phone:'+2347085647535',
   address:'1, rantech stop, ',
 }
 
   Products:[
   {
  name: "Ankara",
  image: "https://product image here",
  brand: "Nike",
  category: "men shoes",
  description: "Buy this nice product",
  price: 4200,
  countInStock: 7,
  rating: 6,
  numReviews: 5,
  }
   ......
]
```

## FRONTEND

- Page to display all products from all users
- Implement an admin/dashboard area to add, edit and delete ( User can only edit and delete Products created by them)
- In the admin/dashboard implement a page to shows the users information
- Create a Login Page and Sign Up Page

## Test coverage

- Make sure you write test to cover your application using Jest/supertest

### Test

- Test for a GET request
- Test for a POST request
- Test for a PUT request
- Test for a DELETE request
- Test to return proper HTTP status codes


### PROJECT STRUCTURE MVC
- MODEL

- VIEW - UI with REACT

- CONTROLLER

### HINTS FROM DAMILOLA
- Use EJS template. use html and css and render, template engines
- all routes should be imported in app
- orm  sequalize, type orl works similar to mongoose
