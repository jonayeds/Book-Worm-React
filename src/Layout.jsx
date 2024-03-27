import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const Layout = () => {
    return (
        <div  className="bg-white px-32  flex items-center flex-col">
            <div className="h-20 mx-auto w-full flex justify-center">
            <Nav></Nav>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;