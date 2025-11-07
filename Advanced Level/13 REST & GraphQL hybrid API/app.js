const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");

const userRoutes = require("./routes/userRoutes");
const schema = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/users", userRoutes);
app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
}));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB Bağlantısı Başarılı");
        app.listen(5000, () => console.log("Server çalışıyor: http://localhost:5000"));
    })
    .catch(err => console.error(err));