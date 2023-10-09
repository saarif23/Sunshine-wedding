import { useEffect, useState } from "react";
import WeddingPackage from "./WeddingPackage";

const WeddingPackageCards = () => {
    const [weddingPackagesCards, setWeddingPackagesCards] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setWeddingPackagesCards(data))
    }, []);
    return (
        <div  className="mt-20">
            <h1 data-aos="fade-in" className="text-5xl text-center font-bold">Our Wedding Packages</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
                {
                    weddingPackagesCards.map(weddingPackage => <WeddingPackage key={weddingPackage.id} weddingPackage={weddingPackage}></WeddingPackage>)
                }

            </div>
        </div>
    );
};

export default WeddingPackageCards;