const express =require('express')

const app= express();

app.get('/',(req,res)=>{
    res.send('start server')
})


app.get('/products',(req,res)=>{
    res.send({
        products:[
            {id:1, title:'apple', price:100},
            {id:2, title:'mac', price:200},

        ]
    })
})

app.listen(3002,()=>{
    console.log(`server running at 3002`);
})