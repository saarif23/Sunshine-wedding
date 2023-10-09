import { FiCamera } from "react-icons/fi";
import { PiStarOfDavidBold } from "react-icons/pi";
const Services = () => {
    return (
        <div className=" bg-yellow-200 py-5 ">
            <div className="text-center space-y-4">
                <h3 className="text-5xl font-bold">Our Support</h3>
            </div>
            <div className="max-md:space-y-10 max-lg:flex-col lg:flex justify-center py-10 gap-10 ">
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine" className="justify-start max-lg:pl-24 max-md:px-5 flex items-center gap-5">
                    <div className="text-white text-4xl border rounded-full p-3 bg-black">
                        <FiCamera></FiCamera>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold">Professionally Edited Photos</h3>
                        <p className="text-xl">We use our own special photo editing <br /> process to achieve beautiful <br /> photographic memories!</p>
                    </div>
                </div>
                <div data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine" className="justify-start max-md:flex-row-reverse max-lg:pl-80 max-md:px-5 flex items-center gap-5">
                    <div className="text-white text-4xl border rounded-full p-3 bg-black">
                        <PiStarOfDavidBold></PiStarOfDavidBold>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold">Quality Service & Support</h3>
                        <p className="text-xl">We are with you every step of the way, <br /> making sure that everything is ready for <br /> your big day.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;