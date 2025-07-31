import mongoose from "mongoose";

const commerceSchema=mongoose.Schema({
    title:String,
    oldPrice:Number,
    newPrice:Number,
    category:String,
    brand:String,
    image:String,
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Review"
    }]
});
const Commerce= mongoose.model("Commerce",commerceSchema);

export default Commerce;