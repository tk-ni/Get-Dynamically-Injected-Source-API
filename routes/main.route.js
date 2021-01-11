const express = require('express');
const puppeteerManager = require('../puppeteerManager');
const router = express.Router();

router.post('/', async (req,res)=>{
    console.log(req.body.url);
    if(req.body.url){
        try{
            let html = await puppeteerManager.getPageHTML(req.body.url);
            res.status(200).send(html);
        }catch(e){
            console.log(e);
            res.status(500).send(e);
        }
    }else{
        res.status(500).send('Invalid URL');
    }
})
module.exports = router;