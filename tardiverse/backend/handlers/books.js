const Book=require("../database/books");

const addBookToCatalouge=async(req,res)=>{
    const {bookdata}=req.body;

    let book=await Book.findOne({isbn:bookdata.isbn});
    if(book){
       res.send({"message":"Book already exists in this catalouge..."})
    }else{
       let bookdoc=await Book.create(bookdata);
       res.status(200).send({
        data:bookdoc
       })
    }
}

const getAllBooks=async(req,res)=>{
    let books=await Book.find();
    res.status(200).send({
        booksdata:books
    })
}

const searchBookByTitle=async(req,res)=>{
    const {search}=req.params;
    //console.log(search)
    let bookdata=await Book.find({title:{$regex:search}});
    if(bookdata.length!=0){
        res.send(bookdata);
    }else{
        res.send({"message":"Oops didn't find anything..."});
    }
}

module.exports={
    addBookToCatalouge,
    getAllBooks,
    searchBookByTitle
}
