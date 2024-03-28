import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className=" fixed z-10 w-full bg-white shadow-lg lg:px-32  ">
            {/* <h1 className="text-3xl font-bold text-gray-500">Book <span className="text-green-500">Worm</span></h1>
            <ul className="flex  items-center gap-4 font-semibold">
                <NavLink to={'/'} className={({isActive})=>`${isActive? 'border-green-400 text-green-400': 'border-transparent'} px-2 py-1  border-[2px] border-solid  hover:text-gray-400  rounded-md `}>Home</NavLink>
                <NavLink to={'/listed-books'} className={({isActive})=>`${isActive? 'border-green-400 text-green-400': 'border-transparent'} px-2 py-1  border-[2px] border-solid  hover:text-gray-400  rounded-md `}>Listed Books</NavLink>
                <NavLink to={'/pages-to-read'} className={({isActive})=>`${isActive? 'border-green-400 text-green-400': 'border-transparent'} px-2 py-1  border-[2px] border-solid  hover:text-gray-400  rounded-md `}>Pages to Read</NavLink>
                <NavLink to={'/reviews'} className={({isActive})=>`${isActive? 'border-green-400 text-green-400': 'border-transparent'} px-2 py-1  border-[2px] border-solid  hover:text-gray-400  rounded-md `}>Books Reviews</NavLink>
                <NavLink to={'/contact'} className={({isActive})=>`${isActive? 'border-green-400 text-green-400': 'border-transparent'} px-2 py-1  border-[2px] border-solid  hover:text-gray-400  rounded-md `}>Contact</NavLink>
            </ul>
            <div className="flex gap-4">
                <button className=" btn border-none bg-green-500 text-white">Sign In</button>
                <button className=" border-none btn bg-[#38a3c7] text-white">Sign Up</button>
            </div> */}





            <div className="navbar bg-base-100 flex justify-between">
  <div className="">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink to={'/'} className={({isActive})=>`${isActive? 'border-green-400 text-green-400': 'border-transparent'} px-2 py-1  border-[2px] border-solid  hover:text-gray-400  rounded-md `}>Home</NavLink>
        
      <NavLink to={'/listed-books'} className={({isActive})=>`${isActive? 'border-green-400 text-green-400': 'border-transparent'} px-2 py-1  border-[2px] border-solid  hover:text-gray-400  rounded-md `}>Listed Books</NavLink>
      <NavLink to={'/pages-to-read'} className={({isActive})=>`${isActive? 'border-green-400 text-green-400': 'border-transparent'} px-2 py-1  border-[2px] border-solid  hover:text-gray-400  rounded-md `}>Pages to Read</NavLink>
      <NavLink to={'/reviews'} className={({isActive})=>`${isActive? 'border-green-400 text-green-400': 'border-transparent'} px-2 py-1  border-[2px] border-solid  hover:text-gray-400  rounded-md `}>Books Reviews</NavLink>
      <NavLink to={'/contact'} className={({isActive})=>`${isActive? 'border-green-400 text-green-400': 'border-transparent'} px-2 py-1  border-[2px] border-solid  hover:text-gray-400  rounded-md `}>Contact</NavLink>
      </ul>
    </div>
    <h1 className="text-3xl font-bold text-gray-500">Book <span className="text-green-500">Worm</span></h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <NavLink to={'/'} className={({isActive})=>`${isActive? 'border-green-400 text-green-400': 'border-transparent'} px-2 py-1  border-[2px] border-solid  hover:text-gray-400  rounded-md `}>Home</NavLink>
        
        <NavLink to={'/listed-books'} className={({isActive})=>`${isActive? 'border-green-400 text-green-400': 'border-transparent'} px-2 py-1  border-[2px] border-solid  hover:text-gray-400  rounded-md `}>Listed Books</NavLink>
        <NavLink to={'/pages-to-read'} className={({isActive})=>`${isActive? 'border-green-400 text-green-400': 'border-transparent'} px-2 py-1  border-[2px] border-solid  hover:text-gray-400  rounded-md `}>Pages to Read</NavLink>
        <NavLink to={'/reviews'} className={({isActive})=>`${isActive? 'border-green-400 text-green-400': 'border-transparent'} px-2 py-1  border-[2px] border-solid  hover:text-gray-400  rounded-md `}>Books Reviews</NavLink>
        <NavLink to={'/contact'} className={({isActive})=>`${isActive? 'border-green-400 text-green-400': 'border-transparent'} px-2 py-1  border-[2px] border-solid  hover:text-gray-400  rounded-md `}>Contact</NavLink>
    </ul>
  </div>
  <div className=" flex gap-4">
  <button className=" btn border-none bg-green-500 text-white">Sign In</button>
                <button className=" border-none btn bg-[#38a3c7] text-white">Sign Up</button>
  </div>
</div>
        </nav>
    );
};

export default Nav;