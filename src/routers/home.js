const express = require('express');
const homeRouter = express.Router();
const coin = require('../models/coin');
const axios = require('axios').default;
const bodyParser = require('body-parser');
homeRouter.use(bodyParser.json());




const options = {
    method: 'GET',
    url:'https://api.wazirx.com/api/v2/tickers',
    responseType:'json'
}

axios.request(options).then(  async (res)=>{

    const gdata =  res.data;
   // console.log(gdata);
    const jdata = Object.entries(gdata);
    console.log(JSON.parse(JSON.stringify(gdata.aliceinr)));

     const newkeys = Object.keys(gdata);
  

//    for (let i = 0; i <10; i++) {
//     const l = jdata[i];
//        const adata = new coin({
//            name:l[1].name,
//            last:l[1].last,
//            buy:l[1].buy,
//            sell:l[1].sell,
//            volume:l[1].volume,
//            base_unit:l[1].base_unit 
//        });
//      //  const sdata = await adata.save();
//        console.log(adata);
//   }

})




    homeRouter.get('/', async(req, res)=>{
        try {
            res.render('index');
        } catch (err) {
            res.status(404).send(err);
            console.log(err);
        }
    })
    homeRouter.get('/data', async(req, res)=>{
        try {
            const data = await coin.find({});
             res.send(data);
        } catch (err) {
            res.status(404).send(err);
            console.log(err);
        }
    })
    











module.exports = homeRouter;