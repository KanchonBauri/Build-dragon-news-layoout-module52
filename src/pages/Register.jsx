import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('name');
        if (name.length < 5) {
            setError({ ...error, name: "must be more the 5 character long" });
            return;
        }
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log({ name, photo, email, password });


        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                // console.log(user)
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/");
                    })
                    .catch((err) =>{
                        console.log(err);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }
    // asd@gmail.com

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen ">
                <div className="card bg-base-100 w-full rounded-none max-w-lg p-10 shrink-0 shadow-2xl">
                    <h2 className='text-2xl font-semibold  text-center pt-5 '>Login your account</h2>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        {
                            error.name && (
                                <label className="label text-xs text-rose-500">
                                    {error.name}
                                </label>
                            )
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Enter your photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder=" Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
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