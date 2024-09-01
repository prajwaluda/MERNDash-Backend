import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv  from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import clientRoutes from "./routes/client.js"
import generalRoutes from "./routes/general.js"
import managementRoutes from "./routes/management.js"
import salesRoutes from "./routes/sales.js"

//data imports
import User from "./models/User.js";
import Product from "./models/Products.js";
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverVew.js";
import AffiliateStat from "./models/AffiliateModel.js";
import {dataUser, dataProduct, dataProductStat,dataTransaction,dataOverallStat,dataAffiliateStat} from "./data/index.js";


const app= express();
dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors()); //some error

app.use("/client",clientRoutes);
app.use("/management",managementRoutes);
app.use("/sales",salesRoutes);
app.use("/general",generalRoutes); 

const PORT=process.env.PORT|| 9000;
console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT,()=>
        console.log(`Listening Server Port ${PORT}`
        ))
    // User.insertMany(dataUser);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // OverallStat.insertMany(dataOverallStat);
    // AffiliateStat.insertMany(dataAffiliateStat);
}).catch((error)=>console.log(`${error} did not connect`));