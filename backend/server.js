require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const connection = mongoose.connection;
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

connection.once('open', () => {
	console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});