/* eslint-disable react/prop-types */

import { MdOutlinePeopleOutline } from "react-icons/md";
import { SlBookOpen } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
const WishlistSingle = ({book}) => {
    const {bookName, author,  category,  tags, rating, publisher, totalPages, image, yearOfPublishing,id } =  book
    return (
        <div className="flex gap-10  items-center my-6 w-full  border-solid border-gray-200 p-6 border-[1px] rounded-xl ">
        <div>
            <img src={image} alt="" className="h-80" />
        </div>
        <div className="flex-grow">
            <h1 className="text-3xl font-semibold">{bookName}</h1>
            <p className="text-gray-400 font-semibold my-6">By: {author}</p>
            <div className="flex gap-32 ">
                
            <div className="flex gap-4  items-center">
                <p>Tags:</p>
        {
            
            tags.map((tag)=> <span key={id} className="  px-4  py-2 w-max   bg-green-50 text-green-500  rounded-full   h-max">#{tag}</span>)

              
        }
        </div>
            <p className="flex items-center gap-3">
            <CiLocationOn /> Year of Publishing: {yearOfPublishing}
            </p>
            </div>
            <div className="flex  my-6 gap-32 text-gray-500">
                <p className="flex items-center gap-2
                "><MdOutlinePeopleOutline />Publisher: {publisher}</p>
                <p className="flex items-center gap-2"><SlBookOpen />Pages: {totalPages}</p>
            </div>
            <hr />
            <div className="flex  my-6 items-center gap-4">
                <p className="px-4  py-3 rounded-full bg-sky-100  text-sky-500">Category: {category}</p>
                <p className="px-4  py-3 rounded-full bg-orange-100 text-orange-500">Rating: {rating}</p>
                <Link  to={`/book-details/${id}`} className="btn bg-green-400 text-white rounded-full">View Details</Link>
            </div>
            
        </div>
    </div>
    );
};

export default WishlistSingle;