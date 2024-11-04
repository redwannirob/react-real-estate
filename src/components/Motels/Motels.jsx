import { useContext } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { BiSolidDollarCircle } from "react-icons/bi";
import { Link } from "react-router-dom";


const Motels = () => {
    const{motels}=useContext(AuthContex)
    return (
        <div className="mx-auto p-4">
            <div className="mx-auto bg-yellow-100 ">
            {
                motels.map(motel => <div className="card w-4/5 mx-auto mt-8 lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <img className="w-3/5 cardImage"
                            src={motel.image}
                            alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold ">{motel.name}</h2>
                        <p className="text-xl text-secondary font-bold">{motel.price} <BiSolidDollarCircle />
                        </p>
                        <p className="font-bold text-gray-600  text-center w-1/4">{motel.status}</p>
                        <div className="card-actions justify-end">
                            <Link className="btn btn-info" to={`/motels/${motel.id}`}>Details</Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
        </div>
    );
};

export default Motels;