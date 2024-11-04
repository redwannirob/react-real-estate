import { useContext } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { BiSolidDollarCircle } from "react-icons/bi";
import { Link } from "react-router-dom";



const Resorts = () => {
    const {resorts} = useContext(AuthContex)
    
    return (
        <div className="p-4 mx-auto">
            <div >
                <div className="mx-auto bg-yellow-100 ">
                    {
                        resorts.map(resort => <div className="card w-4/5 mx-auto mt-8 lg:card-side bg-base-100 shadow-xl">
                            <figure>
                                <img className="w-3/5 cardImage"
                                    src={resort.image}
                                    alt="Album" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold ">{resort.name}</h2>
                                <p className="text-xl text-secondary font-bold">{resort.price} <BiSolidDollarCircle />
                                </p>
                                <p className="font-bold text-gray-600  text-center w-1/4">{resort.status}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/resorts/${resort.id}`} className="btn btn-info">Details</Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Resorts;