const mongoose = require('mongoose'); 

// Function to establish a connection to the MongoDB database.

const dbConnect = async()=>{
    try{
    const connect=await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
        `database connected: ${connect.connection.host}, ${connect.connection.name}`
    );
} catch(err){
    console.log(err);
    process.exit(1);
}
};

module.exports=dbConnect;
