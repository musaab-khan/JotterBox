const connectToDB = require('./db');
const express = require('express');

connectToDB();
const app = express();
const port = 3000;

app.use(express.json()) //for getting json sent in the api request body otherwise the console.log(req.json) will return undefined in auth.js

//Available routes
app.use("/api/auth",require("./routes/auth"))
//this means when user accesses the /api/link the backend needs to process the file auth file from routes folder (./routes/auth.js)
// app.use("/api/notes",require("./routes/notes"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});