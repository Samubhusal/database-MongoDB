const mongoose=require ("mongoose");
mongoose.connect('mongodb://localhost:27017/mongobdPractise');

const userSchema=mongoose.Schema({
    name:String,
    nickname:String,
    email:String
});

module.exports=mongoose.model("user",userSchema);