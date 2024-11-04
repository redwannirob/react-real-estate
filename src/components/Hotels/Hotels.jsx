import { useContext } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { BiSolidDollarCircle } from "react-icons/bi";
import "./Hotels.css"
import { Link } from "react-router-dom";


const Hotels = () => {
    const { hotels } = useContext(AuthContex);
    return (
        <div className="mx-auto p-4 bg-yellow-100 ">
            {
                hotels.map(hotel => <div className="card w-4/5 mx-auto mt-8 lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <img className="w-3/5 cardImage"
                            src={hotel.image}
                            alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold ">{hotel.name}</h2>
                        <p className="text-xl text-secondary font-bold">{hotel.price} <BiSolidDollarCircle />
                        </p>
                        <p className="font-bold text-gray-600  text-center w-1/4">{hotel.status}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/hotels/${hotel.id}`} className="btn btn-info">Details</Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Hotels;