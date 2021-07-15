const mongoose = require("mongoose");

const DB = process.env.DATABASE


mongoose.connect(DB,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Successful DB");
}).catch((err)=>{
    console.log(err);
})


