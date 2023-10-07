import { Link } from "react-router-dom";


const SignUp = () => {
    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accept = e.target.terms.checked
        console.log(name,photoUrl,email,password,accept)

    }
    return (
        <div className="max-w-[500px] mx-auto my-10">
            <form onSubmit={handleSignUpSubmit} className="w-full shadow-2xl space-y-3 rounded-b-lg py-5">
                <div className="text-center bg-pink-600 px-10 py-6 rounded-t-lg">
                    <h1 className="text-3xl font-extrabold text-white ">Sign Up With Email</h1>
                </div>

                <div className="form-control px-3">
                    <label className="label">
                        <span className="label-text text-xl">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered " required />
                </div>
                <div className="form-control px-3">
                    <label className="label">
                        <span className="label-text text-xl">Photo URL</span>
                    </label>
                    <input type="text" name="photoUrl" placeholder="photoUrl" className="input input-bordered " required />
                </div>
                <div className="form-control px-3">
                    <label className="label">
                        <span className="label-text text-xl">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered " required />
                </div>
                <div className="form-control px-3">
                    <label className="label">
                        <span className="label-text text-xl">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <div className="flex gap-3 py-3  text-xl pl-2">
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms"> Accept Terms and Condition</label>
                    </div>
                </div>
                <div className="form-control  my-6">
                    <button className="text-white font-bold py-2 text-xl rounded-b-lg bg-pink-600">Login</button>
                </div>
                <div className="text-center text-xl">
                    <span> Already have an account? <Link to="/signIn" className="text-pink-600 pb-10 font-bold underline">  Sign In</Link> </span>
                </div>
            </form>
        </div>
    );
};

export default SignUp;