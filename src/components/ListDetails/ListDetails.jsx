import { useContext } from "react";
import {  useParams } from "react-router-dom";
import { AuthContex } from "../AuthProvider/AuthProvider";
import PropTypes from "prop-types";

const ListDetails = () => {
    const {hotels} = useContext(AuthContex);
    const {id} = useParams()
    const founded = hotels.find(hotel => hotel.id.id = id)
    console.log(id)
    // console.log(id)
    
    return (
        <div className="text-center w-full">
            <h2 className="text-3xl font-bold p-2">{founded.name}</h2>
            <p>{founded.description}</p>
            <h2 className="p-2 text-2xl font-semibold">Facilities:</h2>
            <br />
            {
               founded?.facilities?.map(facility => <li>{facility}</li>)
            }
        </div>
    );
};

export default ListDetails;

ListDetails.propTypes = {
    children: PropTypes.node
}