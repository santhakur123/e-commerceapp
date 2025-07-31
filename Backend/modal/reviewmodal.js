import mongoose from "mongoose";
 
const reviewSchema=mongoose.Schema({
    comment :{
        type:String,
        required:true

    },
    rating:{
        type:Number,
        min:1,
        max:5
    },
    createdAT:{
        type:Date,
        default:Date.now()
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

});
const Review=mongoose.model("Review",reviewSchema);

export default Review;