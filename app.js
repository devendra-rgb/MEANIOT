const Express=require('express')
const app =Express()
//const comport= require('./arduino.js')
const port=3000;
var {SerialPort} = require("serialport");

app.use(Express.json())

var arduinoCOMPort = "COM6";

var arduinoSerialPort = new SerialPort({  
    path: arduinoCOMPort,
    baudRate: 9600
    
   });

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

app.post('/light',(req,res) => 
{
    console.log(req.body.status);
    arduinoSerialPort.write(req.body.status);
    res.send('<h1>Light is switched on</h1>')

})



app.get('/fan',(req,res) => 
{
    res.send('<h1>Fan is turned on </h1>')

})




app.listen(port,()=> {
    console.log('port is on $ {port}')
})