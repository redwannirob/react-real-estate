import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContex } from "../AuthProvider/AuthProvider";

const Register = () => {
    const{register,user} = useContext(AuthContex)
    const handleRegister = e =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email')
        const password = formData.get('password')
        register(email,password)
        .then(user =>{
            console.log(user)
        })
        console.log(email,password)

    }
    return (
        <div className="mx-auto">
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register!</h1>
                        
                    </div>
                    <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
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
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Create Account</button>
                            </div>
                        </form>
                        {
                            user && <Link to="/">Home</Link>
                        }
                        <p>Already have an account? <Link className="underline text-xl font-bold" to="/login">Login</Link></p>
                        <p className="underline"><Link to="/">Home</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;