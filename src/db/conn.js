const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://TanmoyAtlas1234:TanmoyAtlas1234@cluster0.qebswfo.mongodb.net/criptodb?retryWrites=true&w=majority').then(()=>{
    console.log("connection successfull..");
}).catch(()=>{
    console.log(err);
    console.log("no connection");
})