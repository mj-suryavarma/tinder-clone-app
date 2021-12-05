import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import dbCards from './dbCards.js';
import cors from 'cors'
 

// app config 
const app = express();
const port = 8001 || process.env.PORT

// middleware config
app.use(express.json());
app.use(cors());


/// api endpoint
app.get('/',(req,res) => {
    res.status(200).send("Hello World! from MSJ's tinder-app backend server")
})

app.post('/tinder/cards',(req,res) => {

    const reqCard = req.body

    dbCards.create(reqCard, (err, data) => {
        if(err){
           res.status(500).send(err);
        }
        else {
            res.status(200).send(data)
        }

    });

})


app.get('/tinder/cards',(req,res) =>{
    dbCards.find((err,data) =>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
        
    }) 
})


/// mongo db connection config
mongoose.connect(process.env.MONGO_URI , {
    useNewUrlParser : true,
    useUnifiedTopology :true, 
}
)


// app listening
app.listen(port, () => {
    console.log(`server listening the port no : ${port}`);

})


