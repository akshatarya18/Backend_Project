

const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const connectDb = require("./config/db.js")
const customerRouter = require("./routes/customer.route.js")

app.use(express.json());
app.use(express.urlencoded({ extended:false}));
app.use("/api/v1/customer",customerRouter)
const startServer = async () =>{
    await connectDb();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT , ()=> console.log(`Server started on port ${PORT}`));
};

startServer();

