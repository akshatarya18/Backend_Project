

const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const connectDb = require("./config/db.js")

app.use(express.json());
app.use(express.urlencoded({ extended:false}));

const startServer = async () =>{
    await connectDb();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT , ()=> console.log(`Server started on port ${PORT}`));
};

startServer();
