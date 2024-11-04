import { useContext } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";

const HotelDetails = () => {
    const { hotels } = useContext(AuthContex)
    const {id} = useParams();
    const hotel = hotels.find(hotel => hotel.id == id);
    return (
        <div className="w-full mx-auto">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={hotel.image}
                            alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{hotel.name}</h2>
                        <p>{hotel.status}</p>
                        <p>{hotel.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Book now</button>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default HotelDetails;