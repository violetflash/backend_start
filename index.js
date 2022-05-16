import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from "./router.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

// middlewares
app.use(express.json());
app.use('/api', router);
// app.use('/users', userRouter);


const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log(`SERVER RUNNING ON PORT = ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start();
