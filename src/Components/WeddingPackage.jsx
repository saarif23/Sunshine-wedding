import { useState } from "react";
import { BiSolidBadgeDollar } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";



const WeddingPackage = ({ weddingPackage }) => {

    const [shortDetails, setShortDetails] = useState(false);
    const { id, image, name, price, description, button_text } = weddingPackage;
    const handleDetails = () => {
        setShortDetails(!shortDetails)
    }
    return (

        <div className="flex lg:flex-col gap-5">
            <div className="flex-1">
                <img className="rounded-md" src={image} alt="Album" />
            </div>
            <div className="flex-1 pl-10 space-y-3">
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p>{shortDetails ? description : description.slice(0, 180)}...
                    <button onClick={handleDetails} className=" text-blue-600 underline">{shortDetails ? "See less" : "See more"}</button>
                </p>
                <div className="flex items-center gap-3 text-xl pb-3">
                    <BiSolidBadgeDollar></BiSolidBadgeDollar>
                    <p>Package Price : {price}</p>
                </div>
                <Link to={`weddingPackage/${id}`} ><button className="btn btn-md btn-success btn-outline">{button_text}</button></Link>
            </div>
        </div>

    );
};
WeddingPackage.propTypes = {
    weddingPackage: PropTypes.object.isRequired
}

export default WeddingPackage;