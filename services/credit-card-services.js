import exceptions from "../helpers/errors/exceptions.js";
class CreditCardService {

    async init() {

    }

    async getUsers(){
        let results = { 
            users: [
                {
                    id: 1,
                    firstName: "Tahmid",
                    lastName: "tanzim",
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
                },
                {
                    id: 2,
                    firstName: "Bob",
                    lastName: "Taco",
                    birthdate: new Date(1992, 2, 23),
                    description: "taco",
                    items: []
                }
        ]};
        return results
    }

    async getUsersFails(){
        throw new exceptions.NotFoundError("Getting users Failed for some reason")
    }
}


const CreditCardService = new CreditCardService();
export default CreditCardService;