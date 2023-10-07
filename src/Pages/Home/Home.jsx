import OurWorks from "../../Components/OurWorks";
import Services from "../../Components/Services";
import WeddingPackageCards from "../../Components/WeddingPackageCards";
import Header from "../../Header/Header";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="max-w-6xl mx-auto">
                <WeddingPackageCards></WeddingPackageCards>
                <OurWorks></OurWorks>
            </div>
                <Services></Services>

        </div>
    );
};

export default Home;