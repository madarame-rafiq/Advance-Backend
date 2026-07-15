import express from 'express'
import dotenv from 'dotenv'
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.status(200).json({message: "Welcome to Docker."});
})

app.listen(PORT, () => {
    console.log(`The server is listening at port ${PORT}`);
});