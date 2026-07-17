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


// command to run the image on our local machine using port mapping
// {docker run -ti -p 5000:5000 -e PORT=5000 test-image-latest}