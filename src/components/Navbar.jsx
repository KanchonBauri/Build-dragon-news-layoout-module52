import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user?.email)

    // const handleLogout = () => {
    //     logOut()
    // }

    return (
        <div className='flex justify-between items-center '>
            <div className="">{user?.email}</div>
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="login flex gap-2 ">
                <img src={userIcon} alt="" />
                {
                    user && user?.email ? <button onClick={logOut}>logout</button> : <Link to="/auth/login" className='btn btn-neutral rounded-none'>Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;