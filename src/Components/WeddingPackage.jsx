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

        <div className="flex max-md:flex-col max-md:px-5 md:flex-row md:px-5 md:items-center lg:flex-col lg:gap-5 gap-1">
            <div className="flex-1">
                <img data-aos="zoom-in" data-aos-duration="1000"
                data-aos-delay="50"
             className="rounded-md" src={image} alt="Album" />
            </div>
            <div  className="flex-1 pl-10 space-y-3">
                <h2 data-aos="flip-left"  data-aos-delay="50" data-aos-duration="1000" className="text-2xl font-semibold">{name}</h2>
                <p className="text-justify">{shortDetails ? description : description.slice(0, 180)}...
                    <button onClick={handleDetails} className=" text-blue-600 underline">{shortDetails ? "See less" : "See more"}</button>
                </p>
                <div data-aos="zoom-in-right"
                data-aos-duration="1000"
                data-aos-delay="50"
                 className="flex items-center gap-3 text-xl pb-3">
                    <BiSolidBadgeDollar></BiSolidBadgeDollar>
                    <p>Package Price : {price}</p>
                </div>
                <Link to={`weddingPackage/${id}`} ><button data-aos="zoom-in" data-aos-duration="1000"
                data-aos-delay="50" className="btn md:btn-sm btn-md btn-success btn-outline">{button_text}</button></Link>
            </div>
        </div>

    );
};
WeddingPackage.propTypes = {
    weddingPackage: PropTypes.object.isRequired
}

export default WeddingPackage;