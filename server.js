require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const connection = mongoose.connection;
const path = require("path");
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;
const articlesRouter = require('./routes/articles');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

connection.once('open', () => {
	console.log("MongoDB database connection established successfully");
})

app.use('/articles', articlesRouter);

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});