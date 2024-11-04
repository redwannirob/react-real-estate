import { useContext } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { BiSolidDollarCircle } from "react-icons/bi";

const VacationRentals = () => {
    const{vacationRentals} = useContext(AuthContex)
    return (

        <div className="p-4 mx-auto">
            <div className="mx-auto bg-yellow-100 ">
                {
                    vacationRentals.map(vacationRental => <div className="card w-4/5 mx-auto mt-8 lg:card-side bg-base-100 shadow-xl">
                        <figure>
                            <img className="w-3/5 cardImage"
                                src={vacationRental.image}
                                alt="Album" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold ">{vacationRental.name}</h2>
                            <p className="text-xl text-secondary font-bold">{vacationRental.price} <BiSolidDollarCircle />
                            </p>
                            <p className="font-bold text-gray-600  text-center w-1/4">{vacationRental.status}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-info">Details</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>

    );
};

export default VacationRentals;