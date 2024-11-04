import { useContext } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";

const LodgesDetails = () => {
    const{lodges}=useContext(AuthContex);
    const{id} = useParams();
    const lodge = lodges.find(lodge => lodge.id == id)
    return (
        <div className="mx-auto ">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={lodge.image}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{lodge.name}</h2>
                    <p>{lodge.status}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LodgesDetails;