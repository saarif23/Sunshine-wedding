import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import swal from 'sweetalert';
import { } from 'react-icons/fc';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signIn, googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                swal("Good job!", "Sign In Successfully!", "success");
            })
            .catch(error => {
                console.error(error)
            })
    };
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
                    <div className="flex  relative items-center">
                        <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full" required />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3">{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                    </div>
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

                <p onClick={handleGoogleSignIn} className="hover:cursor-pointer text-xl text-center ">Continue with Google</p>

            </form>

        </div>
    );
};

export default SignIn;