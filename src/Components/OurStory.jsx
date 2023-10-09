

const OurStory = () => {
    return (
        <div>
            <div className="flex bg-pink-100">
                <div className="flex-1 text-center  py-20 space-y-3">
                    <h3 className="text-4xl font-bold text-pink-300">About Us</h3>
                    <p className="max-w-lg mx-auto">Wedding Planner is a wedding planning firm specializing in Month-Of Coordination in Venice and Rome. We work with knowledgeable, planning-savvy engaged couples who want to plan independently, but need a professional to tie loose ends in their final pre-wedding month and provide on-site management on their big day.</p>
                </div>
                <div className="flex-1 ">
                    <img className="max-h-96 w-full" src='https://i.ibb.co/R4LvmVv/shutterstock-379219543-min.jpg' alt="" />
                </div>
            </div>
            <div className="flex flex-row-reverse bg-lime-100">
                <div className="flex-1 text-center  py-20 space-y-3">
                    <h3 className="text-4xl font-bold text-lime-400">Planning a Destination Wedding?</h3>
                    <p className="max-w-lg mx-auto">As experienced destination wedding planners; our promise is to plan every single detail on behalf of you at each stage and just like you would do in the desired professional way.Either it’s only for you two or with your guests up to 200. According to your wishes; we will offer you venues and suggest you the best locations. While sorting out the paperwork and other legal requirements, we’ll be bargaining with vendors and look after their payments on behalf of you.</p>
                </div>
                <div className="flex-1 ">
                    <img className="max-h-96 w-full" src='https://i.ibb.co/Ns4DfzL/shutterstock-476920312-min.jpg' alt="" />
                </div>
            </div>
        </div>
    );
};

export default OurStory;