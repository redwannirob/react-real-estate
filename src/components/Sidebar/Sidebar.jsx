import { Children, useContext } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { FaFacebookSquare } from "react-icons/fa";
import Login from "../Login/Login";
import PriceChart from "../PriceChart/PriceChart";


const Sidebar = () => {
    const { hotels } = useContext(AuthContex);

    const hotelId = hotels.map(hotel => hotel.id);
    const singleId = hotelId.map(id => id)


    return (
        <div className=" border-double px-2	 border-yellow-600 w-1/6  ">
            
                <h2 className="btn text-xl border  bg-gray-500 font-bold mt-2  w-full py-4"><span className="mr-4 text-blue-600 text-xl"><FaFacebookSquare />
                </span> Facebook</h2>

                <div className="overflow text-center mx-auto w-full text-2xl font-bold mt-2 btn bg-gray-500 ">
                    <Link to="/login">Login via email</Link>
                </div>
            

                <div className="text-center shadow-lg shadow-indigo-500/100 	  mt-4 text-xl py-4 font-bold bg-blue-300">
                <h2 >Perfect place for book your holiday plans</h2>
                <PriceChart></PriceChart>
                </div>

        </div>
    );
};

export default Sidebar;

Sidebar.propTypes = {
    children: PropTypes.node
}