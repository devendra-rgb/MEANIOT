const Express=require('express')
const app =Express()
const port=3000;


app.get('/',(req,res) => 
{
    res.send('<h1> Welcome to First webpage</h1')

})

app.get('/motor',(req,res) => 
{
    res.send('<h1>Motor is switched on</h1>')

})

app.get('/light',(req,res) => 
{
    res.send('<h1>Light is switched on</h1>')

})



app.get('/fan',(req,res) => 
{
    res.send('<h1>Fan is turned on </h1>')

})




app.listen(port,()=> {
    console.log('port is on $ {port}')
})