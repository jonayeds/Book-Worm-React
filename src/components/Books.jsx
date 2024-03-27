/* eslint-disable react/prop-types */
import { IoStarHalfOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Books = ({book}) => {
  const {image, tags, bookName, author, category, rating,id} =book
  
    return (
        
            
            <div className="mt-20 "  >
            <Link   to={`/book-details/${id}`} className="card  bg-base-100 shadow-xl p-5 border-solid border-gray-300 border-[1px]">
  <figure><img src={image} alt="Shoes" className="h-96 " /></figure>
  <div className="card-body">
    <div className="flex gap-2 items-center ">
    {
      tags.slice(0,2).map((tag)=> <div key={id} className="p-2 h-max bg-green-50 text-green-500">{tag}</div>)
    } 
     
    
    </div>
    <h2 className="card-title mt-4">
      {bookName}
    </h2>
    <p className="text-gray-400 font-semibold font-sans">By: {author}</p>
    <hr className="border-dashed mt-4" />
      <div className="flex justify-between mt-4">
      <div className=" ">{category}</div> 
      <div className="flex items-center font-sans ">{rating}   < IoStarHalfOutline className="ml-2" /></div> 
      </div>
      
    
  </div>
</Link>
            </div>
        
    );
};

export default Books;