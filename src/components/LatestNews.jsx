import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-2 items-center bg-slate-200 p-2 '>
            <p className='bg-pink-700 text-white px-3 py-2 '>Latest</p>
            <Marquee pauseOnHover="true" speed="100" className='space-x-10'>
                <Link to='/news'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quam.</p>
                </Link>
                <Link to='/news'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quam.</p>
                </Link>
                <Link to='/news'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quam.</p>
                </Link>
                <Link to='/news'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quam.</p>
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;