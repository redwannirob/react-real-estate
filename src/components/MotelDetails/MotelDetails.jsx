import { useContext } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";

const MotelDetails = () => {
    const { motels } = useContext(AuthContex);
    const{id}=useParams();
    const motel = motels.find(motel => motel.id == id)
    return (
        <div>
            
             <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={motel.image}
                            alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{motel.name}</h2>
                        <p>{motel.status}</p>
                        <p>{motel.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Book now</button>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default MotelDetails;