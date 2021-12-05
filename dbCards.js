import Mongoose  from "mongoose";

const TinderCardShema = Mongoose.Schema({
    name: String,
    imgUrl : String,
})
console.log("connected with database.... ");

export default Mongoose.model('tenderCard',TinderCardShema);
