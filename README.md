# Wallet

A simple CRUD application with User & Credit Card as One-to-Many relationship.

* npm install
* npm run db:create
* npm run dev

docker build . -t tanzim/wallet
docker run -p 3000:3000 -d tanzim/wallet