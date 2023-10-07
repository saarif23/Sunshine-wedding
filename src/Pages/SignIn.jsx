import { Link } from "react-router-dom";



const SignIn = () => {

    const handleLoginSubmit = (e) => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
    }
    return (
        <div className="w-96 mx-auto my-10">
            <form onSubmit={handleLoginSubmit} className="w-full shadow-2xl space-y-3 rounded-b-lg py-5">
                <div className="text-center bg-pink-600 px-10 py-6 rounded-t-lg">
                    <h1 className="text-3xl font-extrabold text-white ">Please Sign In</h1>
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
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-xl">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control  my-6">
                    <button className="text-white font-bold py-2 text-xl rounded-b-lg bg-pink-600">Login</button>
                </div>
                <div className="text-center text-xl">
                    <span> Do not have an account? <Link to="/signUp" className="text-pink-600 pb-10 font-bold underline">  Sign up</Link> </span>
                </div>
            </form>
        </div>
    );
};

export default SignIn;