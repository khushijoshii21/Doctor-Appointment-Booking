const express = require('express');

const cors = require('cors');

const app = express();




// Enable CORS for all routes
app.use(
    cors({
        origin:"http://localhost:3000"
    })
);

require('dotenv').config()
const dbConfig = require("./config/dbConfig");
app.use(express.json());
const userRoute = require("./routes/userRoute");



app.use('/api/user',userRoute);
const port=process.env.PORT || 5000;


app.listen(port,() => console.log(`Node server started at port ${port}`));
