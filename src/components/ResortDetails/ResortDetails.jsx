import { useContext } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";

const ResortDetails = () => {
    const{resorts}=useContext(AuthContex);
    const{id} = useParams();
    const resort = resorts.find(resort => resort.id == id)
    return (
        <div className="mx-auto">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={resort.image}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{resort.name}</h2>
                    <p>{resort.status}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResortDetails;