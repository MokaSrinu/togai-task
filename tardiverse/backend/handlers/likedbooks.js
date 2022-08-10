const LikedBook=require("../database/likedbooks");

const addUserLikedBooks=async(req,res)=>{
    const {likedbookdata}=req.body;
       console.log(likedbookdata);
       let bookdoc=await LikedBook.create(likedbookdata);
       console.log(bookdoc);
       res.status(200).send({
        data:bookdoc
       })
}
const getlikedBooksOfUser=async(req,res)=>{
    let {userid}=req.params;
    userid=String(userid)
     let likeddataofuser=await LikedBook.find({user:userid}).populate("user").populate("book")
    res.status(200).send({
        data:likeddataofuser
    })
}


module.exports={
    addUserLikedBooks,
    getlikedBooksOfUser
}