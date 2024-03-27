
import { useLoaderData, useParams } from "react-router-dom";
import { saveBooks, saveWishlist } from "../utils";
import toast from "react-hot-toast";

const BookDetails = () => {
  const book = useLoaderData();
  console.log(book);
  const { id } = useParams();
  console.log(id);
  const singleBook = book.find((singleBook) => singleBook.id == id);
  console.log(singleBook);
  const {bookName, author,  category,   review, tags, rating, publisher, totalPages, image, yearOfPublishing } = singleBook
 
  
  const handleRead =(readBook)=>{
    saveBooks(readBook)
  }
  const handleWishlist =(readBook)=>{
    const readBooks = localStorage.getItem('readBook')
    const readList = JSON.parse(readBooks)
    const validWishlist=   readList.find(wish=> readBook.id === wish.id  )
    if(validWishlist){
      return toast.error('Already Added to Read List')
    }
    else{
      saveWishlist(readBook)
    }
  }
  return (
    <div className="flex items-center gap-8 mt-20">
      <div  className="">
        <img src={image} alt="" />
      </div>
      <div className="">
        <h1 className="text-4xl font-semibold">{bookName}</h1>
        <p className="text-gray-400 my-5  font-semibold">By: {author}</p>
        <hr />
        <p className="text-gray-500 my-4 ">{category}</p>
        <hr />
        <p className="my-4"><span>Review: </span>{review}</p>
        <p className="my-2 leading-[50px] flex">Tag:  
            <div className="flex gap-4 ml-4">
            {
                
                tags.map((tag)=> <span key={id} className="  px-2 w-max   bg-green-50 text-green-500">#{tag}</span>)
                  
            }
            </div>
        </p>
        <hr />
        <table className="mt-6">
            <thead>
                <td className="pr-8 text-gray-400">Number of pages:</td>
                <td className="text-black font-semibold">{totalPages}</td>
                <td></td>
            </thead>
            <tr>
                <td  className="text-gray-400">Publisher:</td>
                <td className="text-black font-semibold">{publisher}</td>
                <td></td>
            </tr>
            <tr>
                <td  className="text-gray-400">Year of Publishing:</td>
                <td  className="text-black font-semibold">{yearOfPublishing}</td>
                <td></td>
            </tr>
            <tr>
                <td  className="text-gray-400">Rating:</td>
                <td  className="text-black font-semibold">{rating}</td>
                <td></td>
            </tr>

        </table>
        <div  className="mt-6 flex gap-4">
            <button onClick={()=>handleRead(singleBook)}  className="btn bg-white border-gray-300 px-5">Read</button>
            <button onClick={()=>handleWishlist(singleBook)}  className="btn px-5 bg-[#38a3c7] text-white border-none">wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
