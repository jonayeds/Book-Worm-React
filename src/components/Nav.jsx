import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="flex py-4 justify-between items-center fixed z-10 w-full bg-white shadow-lg px-32 ">
            <h1 className="text-3xl font-bold text-gray-500">Book <span className="text-green-500">Worm</span></h1>
            <ul className="flex  items-center gap-4 font-semibold">
                <NavLink to={'/'} className={({isActive})=>`${isActive? 'border-green-400 text-green-400': 'border-transparent'} px-2 py-1  border-[2px] border-solid  hover:text-gray-400  rounded-md `}>Home</NavLink>
                <NavLink to={'/listed-books'} className={({isActive})=>`${isActive? 'border-green-400 text-green-400': 'border-transparent'} px-2 py-1  border-[2px] border-solid  hover:text-gray-400  rounded-md `}>Listed Books</NavLink>
                <NavLink to={'/pages-to-read'} className={({isActive})=>`${isActive? 'border-green-400 text-green-400': 'border-transparent'} px-2 py-1  border-[2px] border-solid  hover:text-gray-400  rounded-md `}>Pages to Read</NavLink>
            </ul>
            <div className="flex gap-4">
                <button className=" btn border-none bg-green-500 text-white">Sign In</button>
                <button className=" border-none btn bg-[#38a3c7] text-white">Sign Up</button>
            </div>
        </nav>
    );
};

export default Nav;