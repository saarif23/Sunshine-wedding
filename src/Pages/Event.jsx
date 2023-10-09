import { Helmet } from "react-helmet-async";


const Event = () => {
    return (
        <div className="min-h-screen flex justify-center items-center ">
            <Helmet>
                <title>Sunshine Wedding | Event</title>
            </Helmet>
           
            <div className="space-y-10 text-center">
                <h3 className="text-5xl text-center font-bold text-lime-800">Please !!! <br /> Visit Another Route. <br />This Page On Going....</h3>
            <progress className="progress w-56"></progress>
            </div>
        </div>
    );
};

export default Event;