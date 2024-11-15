import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen ">
                <div className="card bg-base-100 w-full rounded-none max-w-lg p-10 shrink-0 shadow-2xl">
                    <h2 className='text-2xl font-semibold  text-center pt-5 '>Login your account</h2>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Enter your photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder=" Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn rounded-none btn-primary">Register</button>
                        </div>
                    </form>
                    <h2 className='text-2xl font-semibold  text-center  '>Allready Have An Acount ? <Link className='text-blue-700 border-b-2 border-blue-700 ' to="/auth/login">Login</Link> </h2>
                </div>
            </div>
        </div>
    );
};

export default Register;