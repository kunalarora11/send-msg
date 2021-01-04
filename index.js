const express = require('express');
const fast2sms = require('fast-two-sms');

const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))

app.post('/send_msg',async (req,res)=>{
    var opt =
    {   
        authorization : process.env.API_KEY , 
        message : req.body.msg ,  
        numbers : [req.body.num]
    }
    await fast2sms.sendMessage(opt)
    res.send('Message sent on '+req.body.num)
})

app.get('/',(req,res)=>{
    res.render('index');
})


app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
})