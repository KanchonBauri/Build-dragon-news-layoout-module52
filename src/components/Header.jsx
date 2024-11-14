import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-2 '>
            <div>
                <img src={logo} alt="" />
            </div>
            <h2 className='text-gray-400'>Journalism Without fear Or Favour</h2>
             {/* <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>  Thursday, November 14th 2024, 2:46:01 pm */}
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;