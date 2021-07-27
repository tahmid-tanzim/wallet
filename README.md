# Wallet

A simple CRUD application with User & Credit Card as One-to-Many relationship.

* npm install
* npm run db:create
* npm run dev

docker build . -t tanzim/wallet
docker run -p 3000:3000 -d tanzim/wallet

### API Documentation
| #   | HTTP Verb | Request URL                                      | Remarks                         |
|:---:|:----------|:-------------------------------------------------|:--------------------------------|
| 1   | GET       | /v1/users                                        | Fetch all users                 |
| 2   | GET       | /v1/users/:userUUID                              | Fetch user                      | 
| 3   | POST      | /v1/users                                        | Create user                     |
| 4   | PUT       | /v1/users/:userUUID                              | Update user                     |
| 5   | DELETE    | /v1/users/:userUUID                              | Remove user                     |
| 6   | GET       | /v1/users/:userUUID/credit-cards                 | Fetch credit cards of a user    |
| 7   | POST      | /v1/users/:userUUID/credit-cards                 | Create credit card of a user    |
| 8   | GET       | /v1/credit-cards/:creditCardUUID                 | Fetch credit card (#8 == #9)    |
| 9   | GET       | /v1/users/:userUUID/credit-cards/:creditCardUUID | Fetch credit card (#8 == #9)    |
| 10  | GET       | /v1/credit-cards                                 | Fetch all credit cards          |
| 11  | PUT       | /v1/credit-cards/:creditCardUUID                 | Update credit card (#11 == #12) |
| 12  | PUT       | /v1/users/:userUUID/credit-cards/:creditCardUUID | Update credit card (#11 == #12) |
| 13  | DELETE    | /v1/credit-cards/:creditCardUUID                 | Delete credit card (#13 == #14) |
| 14  | DELETE    | /v1/users/:userUUID/credit-cards/:creditCardUUID | Delete credit card (#13 == #14) |

### User Request Body
```
{
    "first_name": "Tahmid", 
    "last_name": "Tanzim",
    "email": "tahmid.tanzim@gmail.com", 
    "date_of_birth": "1945-02-06"
}        
```                                           

### CreditCard Request Body
```
{
    "number": "4012888888881881", 
    "type": "Visa",
    "credit_limit": 1234.56, 
    "expire_date": "1965-01-11"
} 
```                                           
