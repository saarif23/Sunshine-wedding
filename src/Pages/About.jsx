import OurStory from "../Components/OurStory";
import OurTeams from "../Components/OurTeams";

const About = () => {
    return (
        <div className="max-w-6xl mx-auto ">
            <div className="flex">
                <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/Jyn9Dpd/couple-photo-shoot-wedding-day.jpg)' }}>
                    <div className="hero-overlay hover:bg-opacity-70 bg-opacity-40"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">What We Do</h1>
                            <p className="mb-5 cursor-pointer underline font-bold text-xl">Our Stroy</p>

                        </div>
                    </div>
                </div>
                <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/L9gXQMh/bearded-man-his-lovely-bride-pose-snow-magic-winter-forest-Copy.jpg)' }}>
                    <div className="hero-overlay hover:bg-opacity-70 bg-opacity-40"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Who We Are</h1>
                            <p className="mb-5 cursor-pointer underline font-bold text-xl">Our Team</p>

                        </div>
                    </div>
                </div>
            </div>
            <OurStory></OurStory>
            <OurTeams></OurTeams>

        </div>
    );
};

export default About;