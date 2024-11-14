import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-semibold mt-5  '>Find Us On</h2>
            <div className="join join-vertical w-full *:bg-base-100 *:justify-start  ">
                <button className="btn join-item"><FaFacebook/>Facebook</button>
                <button className="btn join-item"><BsTwitter/>Twitter</button>
                <button className="btn join-item"><FaInstagram/>Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;