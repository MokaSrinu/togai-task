const mongoose=require("mongoose");

async function connectDatabase(){
    const dburi="mongodb://localhost:27017/booknetwork";
    try {
        await mongoose.connect(dburi);
        console.log("database connected...")
    } catch (error) {
        console.log("Something went wrong...");
        throw error;
    }
}

module.exports=connectDatabase;