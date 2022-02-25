const mongoose = require('mongoose');


const coinSchema = new mongoose.Schema({

    name:{
        type:String
    },
    last:{
        type:Number
    },
    buy:{
        type:Number
    },
    sell:{
        type:Number
    },
    volume:{
        type:Number
    },
    base_unit:{
        type:String
    }

})

const Coin = new mongoose.model('coin', coinSchema);


module.exports = Coin;