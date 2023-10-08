import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import swal from 'sweetalert';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";


const SignUp = () => {
    const { signUp } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleSignUpSubmit = (e) => {
        e.preventDefault();
       

        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accept = e.target.terms.checked
        console.log(name, photoUrl, email, password, accept)
        if (password.length < 6) {
            return swal({
                title: "Error!",
                text: "Password should be at least 6 characters",
                icon: "error",
            });
        } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/.test(password)) {
            return swal({
                title: "Error!",
                text: "Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 6 characters long.",
                icon: "error",
            });
        } else if (!accept) {
            return swal({
                title: "Error!",
                text: "Accepted Terms and Conditions",
                icon: "error",
            });
        }
        signUp(email, password)
            .then(result => {
                console.log(result.user)
                swal("Good job!", "Sign Up Successfully!", "success");
                navigate("/")
                e.target.reset();
            })
            .catch(error => {
                return swal({
                    title: "Error!",
                    text: { error },
                    icon: "error",
                });
            })

    }
    return (
        <div className="max-w-[500px] mx-auto my-10">
            <Helmet>
                <title>Sunshine Wedding | Sign Up </title>
            </Helmet>
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
                    <div className="flex  relative items-center">
                        <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full" required />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3">{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                    </div>

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