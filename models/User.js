const mongoose = require("mongoose")
const userSchema = new mongoose.Schema(
    {
        TaskType:String,
        Title:String,
        Description:String,
        ExpiryDate:String,
        RequireMW:String,
        Reward:String,
        Number:String
}
)
const User = module.exports = mongoose.model("User",userSchema);
