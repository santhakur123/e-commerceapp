import Review from "../modal/reviewmodal.js";
import Commerce from "../modal/emodal.js"

export const getReview=async (req,res)=>{
    try{
        const {id}= req.params;
        const {rating,comment}=req.body;

        const revData=await Commerce.findById(id);
        if (!req.user || !req.user._id) {
            return res.status(401).json({ message: "Unauthorized. Please log in." });
          }
      
         const newReview= new Review({rating,comment});
         newReview.author=req.user._id;
  await revData.reviews.push(newReview);

  await revData.save();
  await newReview.save();
  // Respond with success
  res.status(201).json({
    message: "Review added successfully.",
    review: {
      rating: newReview.rating,
      comment: newReview.comment,
      author: req.user.username, // Assuming `req.user.username` is available (you might want to include this based on your model)
    },});
 

        
    }catch(err){
        console.log(err);
    }

}


