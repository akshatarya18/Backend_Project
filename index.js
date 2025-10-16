

const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const logger = require("./config/logout.js")
const connectDb = require("./config/db.js")
const customerRouter = require("./routes/customer.route.js")
const billRouter = require("./routes/bill.route.js")
const productRouter = require("./routes/product.route.js")
app.use(express.json());
app.use(express.urlencoded({ extended:false}));
app.use("/api/v1/customer",customerRouter)
app.use("/api/v1/bill",billRouter)
app.use("/api/v1/product",productRouter)
const startServer = async () =>{
    try{
    await connectDb();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT , ()=> logger.info(`Server started on port ${PORT}`));
    }catch(err){
        logger.error(`error starting server: ${err.message}`);
    }
};

startServer();

