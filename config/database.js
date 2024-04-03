const { default: mongoose } = require("mongoose");
module.exports.connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("thanh cong")
    }
    catch{
        console.log("that bai")
    }
}