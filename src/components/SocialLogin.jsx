import React from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa6";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3  '>Login with</h2>
            <div className="flex flex-col gap-2  ">
                <button className="btn"><FaGoogle />Login with Google</button>
                <button className="btn"><FaGithub />Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;