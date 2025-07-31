import Commerce from "../model/emodel.js"

export const getCommerce= async(req,res)=>{
    try{
        const commerce= await Commerce.find().lean(); //Use .lean()to get plain javaScript objects
        // Map _id to id
    const commerceWithId = commerce.map(item => ({
        id: item._id,  // Map _id to id
        ...item,       // Spread other properties
      }));
        res.status(200).json(commerceWithId);
    }catch (err){
   res.status(500).json(err);
    }
};
export const getShow=async(req,res)=>{
    try{
     const {id}=req.params;
        const show=await Commerce.findById(id).lean();
        res.status(200).json({id:show._id,...show});// Map _id to id and return
    }catch (err){
        res.status(500).json(err)
    }
};
// export const getBuy=async(req,res)=>{
//     try{
//         const p
//     }
// }