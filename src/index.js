const express =require('express')

const app= express();

app.get('/',(req,res)=>{
    res.send('start server')
})

app.listen(3002,()=>{
    console.log(`server running at 3002`);
})