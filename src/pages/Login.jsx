import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const { setUser, userLogin } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
               
            })
            .catch((error) => {
                alert(error.code);
            })
    };
    return (
        <div className="hero bg-base-200 min-h-screen ">
            <div className="card bg-base-100 w-full rounded-none max-w-lg p-10 shrink-0 shadow-2xl">
                <h2 className='text-2xl font-semibold  text-center pt-5 '>Login your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={userLogin} className="btn rounded-none btn-primary">Login</button>
                    </div>
                </form>
                <h2 className='text-2xl font-semibold  text-center  '>Dont't Have An Acount ? <Link className='text-blue-700 border-b-2 border-blue-700 ' to="/auth/register">Register</Link> </h2>
            </div>
        </div>
    );
};

export default Login;