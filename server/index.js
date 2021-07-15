const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");


dotenv.config({path : "./config.env"})
const PORT = process.env.PORT

require("./DB/conn")
const User = require("./Model/userSchema");


app.use(express.json())
app.use(cors())

app.use(require("./Router/auth"))


app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
})