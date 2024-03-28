import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";

const Listed = () => {
    const [tabIndex, setTabIndex] = useState(0)
    
    
    
    return (
    <div className="w-full">
         <div className="w-full text-center mt-20 py-8 bg-gray-100 text-4xl font-bold rounded-2xl">
            <h1 className="">
                Books
            </h1>
        </div>
        <div  className="flex justify-center my-12 ">
        <div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="btn m-1 bg-green-400 text-white hover:bg-green-400 w-40">Sort By <FaAngleDown /></div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-full  ">
    <li><a  className=" mx-auto">Rating</a></li>
    <li><a className="mx-auto">Number of Pages</a></li>
    <li><a className="mx-auto">Publisher Year</a></li>
  </ul>
</div>
        </div>
        <div className="flex items-center -mx-4  sm:justify-start flex-nowrap mt-10">
	<Link  to={''} onClick={()=>setTabIndex(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400 `}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Read Books</span>
	</Link>
	<Link  to={'wishList'}  onClick={()=>setTabIndex(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400 `}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Wishlist</span>
	</Link>
	
	
</div>
        <Outlet></Outlet>
    </div>
    );
};

export default Listed;