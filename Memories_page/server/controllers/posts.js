import PostMessage from "../models/postMessages.js";



export const getposts=async(req,res)=>{
   // res.send('This works');
   try {
       const postMessages=await PostMessage.find();

       console.log(postMessages);
       res.status(200).json(postMessages);


   } catch (error) {
    res.status(404).json({message:error.message});
   }
}

export const createPosts=async(req,res)=>{
    // res.send('This is for post creati0n works');
      const post =req.body;
      const newPost =new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
        
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}