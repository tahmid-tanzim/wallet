# Wallet

A simple CRUD application with User & Credit Card as One-to-Many relationship.

* npm install
* npm run dev

### Initial PostgreSQL Database Setup
Run below command in terminal to create database.
`psql -U postgres -W`
```
SELECT 'CREATE DATABASE shopping_cart' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'shopping_cart')\gexec
```


_______________________________________________



This is a take-home programming assignment to evaluate programming skills, adaptability, and creativity. The assignment should only take a few hours to complete, we have added a basic express framework that will run on port 3000. *(npm start)*

As the developer you are free to change any of the basic code if you wish we only ask is you keep the language as NodeJs and the database as Mongo or SQL (Postgres).

The data should be relativily simple, we would like you to create a object model that supports child objects, you are free to design and implement it as you see fit.

### Example ###

``` 
    {
        id: 1,
        firstName: "Aaron",
        lastName: "Shack",
        birthdate: new Date(1982, 11, 17),
        description: "human",
        items: [
            {
                id: "a",
                name: "GeForce RTX 3080",
                quantity: 1,
                description: "Wish list item #1"
            },
            {
                id: "b",
                name: "Jar of Pickles",
                quantity: 30,
                description: ""
            }
        ]
    }
```

The CRUD endpoints should be concise and readable, as a user I should be able to: 

- Add a Parent object
- Add a Child to a Parent
- Retrieve a Parent with its children
- Retrieve a Individual child object
- Edit and Delete

### Rendering html or having a usable interface is not required, we wish this to be a fully rest API ###

# Backend Challenge

- [ ] Create a simple model on MongoDB or Postgres
- [ ] Model should support 2 levels, An parent object should be able to have child objects
- [ ] Create a REST CRUD (create, read, update, delete) for the model
- [ ] It should be available on your github repo


# Extras
- [ ] Error handling 
- [ ] Add tests using [Jest]
- [ ] Add authentication 
- [ ] Add docker support

[Jest]: https://jestjs.io/


We expect this to only to take a few hours to complete, do your best and try to get it back to us in around 5 days.

When you are ready to submit please send us a email with the link to where we can download your solution, preferably github.

### Send a email with your solution to:
- gabriel@livingskytech.com
- jason@livingskytech.com
- aaron@livingskytech.com

