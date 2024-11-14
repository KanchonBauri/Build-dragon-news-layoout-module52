import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className='w-11/12 mx-auto py-2'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto pt-5 grid grid-cols-12 gap-3  '>
                <aside className='left-0 col-span-3 '>Left Navbar</aside>
                <section className='col-span-6'>Main Section</section>
                <aside className=' col-span-3 '>Righ Navbar</aside>
            </main>
        </div>
    );
};

export default HomeLayout;