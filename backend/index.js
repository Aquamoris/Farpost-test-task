require('dotenv').config();
const express = require('express');
const cors = require("cors");
const bulletinRouter = require('./routes/bulletin.routes');

const PORT = process.env.PORT || 2000;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', bulletinRouter);

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`Server started on ${PORT} port`);
});