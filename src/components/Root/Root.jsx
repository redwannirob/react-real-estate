import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./Root.css"
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div className="flex">
            <Outlet></Outlet>
            <Sidebar></Sidebar>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;