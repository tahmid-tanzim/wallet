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

