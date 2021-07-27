import express from "express";
import config from "config";
import sequelize from "./database/adaptor.js";
import users from "./routes/v1/user.js";
import creditCards from "./routes/v1/credit-card.js";
import index from "./routes/v1/index.js";

const app = express();

app.use(express.json());

app.use("/", index);
app.use("/v1/users", users);
app.use("/v1/credit-cards", creditCards.parentNode);

const port = config.get('service.port') || 3030;
const serviceName = config.get('service.name');
app.listen({ port }, async () => {
    console.log(`${serviceName} service running on port - ${port}`);
    if (process.env.NODE_ENV === 'production') {
        await sequelize.sync();
    } else {
        await sequelize.sync({ force: true, match: /_development$/ });
    }
    console.log(`${serviceName} database connected!`);
});

export default app;