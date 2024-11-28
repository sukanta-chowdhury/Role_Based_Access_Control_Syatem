const mongoose=require('mongoose');
// Define the schema for the user collection.
const userSchema = new mongoose.Schema(
    {
        // Define the `username` field.
username: {
    type: String,
    required: true,
    unique:true,
    },
    // Define the `password` field.
password: {
    type: String,
    required: true,
},
// Define the `role` field.
role: {
    type: String,
    required: true,
    enum: ["admin","manager","user"],
},
    },
{
timestamps: true,
}
);

module.exports=mongoose.model("user",userSchema);