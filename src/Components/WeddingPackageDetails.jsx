import { BiSolidBadgeDollar } from "react-icons/bi";
import { useLoaderData, useParams } from "react-router-dom";

const WeddingPackageDetails = () => {

    const { id } = useParams();
    const weddingPackage = useLoaderData()
    // const job = featureJobDetails.find(job => job.id === parseInt(id));
    const packageDetails = weddingPackage.find(packageDetails => packageDetails.id === parseInt(id))
    console.log(packageDetails)
    const { image, name, price, description, button_text } = packageDetails;

    return (
        <div className="gap-5 max-w-6xl mx-auto">
            <div className="">
                <img className="rounded-md w-full"  src={image} alt="Album" />
            </div>
            <div className="pl-10 space-y-3">
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p>{description}</p>
                <div className="flex items-center gap-3 text-xl pb-3">
                    <BiSolidBadgeDollar></BiSolidBadgeDollar>
                    <p>Package Price : {price}</p>
                </div>
               <button className="btn btn-md btn-success btn-outline">{button_text}</button>
            </div>
        </div>
    );
};

export default WeddingPackageDetails;