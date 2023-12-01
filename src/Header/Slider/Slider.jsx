

const Slider = () => {
    return (<>
        <div className="carousel w-full lg:h-screen md:h-[400px] h-[300px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/gSkMkXw/1211.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/K55968r/1212.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/T2MtPBp/1213.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/NT4N7ty/1215.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="100"
            data-aos-duration="3000"
            className=" w-full absolute bottom-0 rounded-t-lg   bg-white bg-blend-overlay bg-opacity-80 p-3">
            <div className=" border-orange-300 px-10 py-5 border-2 space-y-3 text-center">
                <p className="text-xl  font-semibold text-orange-400"> Wedding Section Discount </p>
                <h3 className="text-3xl text-black">Wedding Ring 50% Off</h3>
                <button className="bg-orange-300 px-10 py-3 font-bold text-white rounded-md">SHOP NOW</button>
            </div>

        </div>
    </>
    );
};

export default Slider;