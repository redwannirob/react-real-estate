import { useContext } from "react";
import auth from "../../firebase.config";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
    const{user,logIn}=useContext(AuthContex);
    const handleLogin = e =>{
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email')
        const password = formData.get('password')
        logIn(email,password)
        .then(user => {
            console.log(user)
        })
        .then(error =>{
            console.error(error)
        })
    }
    return (
        <div className="mx-auto">
            <div className="hero  min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                       
                    </div>
                    <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                            {
                                user ? <p className="text-xl">user logged in</p> : <p className="text-xl text-blue-500 font-bold">Login or <Link to='/register'>Register</Link></p>
                            }
                            <p>Dont have an account? <Link className="underline" to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;