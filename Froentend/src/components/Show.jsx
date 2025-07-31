import React from 'react'
import {useState,useEffect} from "react"
import axios from "axios"
import {useParams} from "react-router-dom"


function Show() {
    const [seen,setSeen]=useState(null);
    const  [comment,setComment]=useState({
      userName:"",
      Remark:"",
      rating:""
  
  });
  const [add,setAdd]=useState();
  
    const {id}=useParams();
      const getDetail = async()=>{
        try{
     
      const find=  await axios.get(`http://localhost:3000/commerce/${id}`);
      setSeen(find.data);
      }catch(err){
        console.log("error",err);
      }
    }
      useEffect(()=>{
        getDetail();
      },[id]);
      // If `seen` is null (i.e., still loading or failed), render a loading state or error message
    if (!seen) {
      return <div>Loading...</div>;  // You can display a loading message or a spinner here

    };

      
    const  handleChange=(event)=>{
        setComment((currUser)=>{
            return{...currUser,[event.target.name]:event.target.value};
        })
    };
    const submitChange=(event)=>{
        console.log(comment);
        event.preventDefault();
        setComment({
        userName:"",
        Remark:"",
        rating:""
    
        })
    
  }

    
  return (
    <>
     <div className="flex  ">
    <h1 className="text-2xl ml-20"> {seen.title}</h1>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row flex-none">
        <div className="max-w-screen-2xl container mx-auto md:px-10 px-4 md-1/2 ">
     <div className="card bg-base-100 w-96 shadow-xl    md:mt-10">
     
  <div className="card-body cursor-pointer ml-50 mt-5"> 
   
  <figure >
    <img
      src={seen.image}
      alt="item_image"  />
  </figure>

    <div className="text-3xl"> {seen.title}</div>
  </div>
  
  
</div></div> 
<div className=" md-1/2  mt-20 px-80 flex-initial-64">
<div className="bg-color-eoc367 ">
        <span className
        ="text-decoration: line-through">{seen.oldPrice}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="font-bold">{seen.newPrice}</span>
    </div>
    <div className="flex  space-x-30 mt-10">
      <button className=" btn btn-primary bg-yellow ml-30"> Add to Cart</button>
      <button className="btn btn-primary ml-20">Buy Now</button>
    </div>
    </div>
    </div>
    </div>
    <div>
            <h3>Give A Comment</h3>
            <form onSubmit={submitChange}>
                <label htmlFor="userName">Username</label>
                <input placeholder="enter Username" type="text" value={comment.userName} onChange={handleChange} name="userName" id="userName"/>
                <br/><br/>
                <label htmlFor="Remark">Remark</label>
                <textarea  type="text" value={comment.Remark} onChange={handleChange} name="Remark" id="Remark">Remark</textarea>
                <br/><br/>
                <label htmlFor="rating">Rating</label>
                <input placeholder="rating" type="number" value={comment.rating} onChange={handleChange} name="rating" id="rating" min={1} max={5}/>
                <br/><br/>
                <button className="btn btn-primary">Add Comment</button>
                {/* <ul>
                    {comment.map((response,index)=>{
                       return  <li key={index}>
                        <span>{response.userName}</span> 
                       <span>{response.Remark}</span>
                       <span>{response.rating}
                       </span> </li> 
                       
                    })}

                </ul> */}
            </form>

        </div>
   
    </>
  )
}


export default Show;
