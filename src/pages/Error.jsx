import { VscBracketError } from "react-icons/vsc";
import { BsFillEmojiDizzyFill } from "react-icons/bs";
const Error = () => {
    return (
        <div className='min-h-[100vh] flex flex-col justify-center items-center bg-gray-100'>
                <div  className="text-[200px] text-red-500 ">
                <VscBracketError />
                    </div> 
                    <h1 className="text-5xl mt-8 font-serif flex gap-4 items-center text-gray-500">Page Not Found <BsFillEmojiDizzyFill /></h1>       
        </div>
    );
};

export default Error;