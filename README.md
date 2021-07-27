# Wallet

A simple CRUD application with User & Credit Card as One-to-Many relationship.

* npm install
* npm run db:create
* npm run dev

docker build . -t tanzim/wallet
docker run -p 3000:3000 -d tanzim/wallet

### API Documentation
|  # | HTTP Verb | Request URL         |
| -- |:----------|:--------------------|
| 1  | GET       | /v1/users           |
| 2  | GET       | /v1/users/:userUUID |
| 3  | POST      | /v1/users           |
| 4  | PUT       | /v1/users/:userUUID |
| 5  | DELETE    | /v1/users/:userUUID |