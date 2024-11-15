import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCart from '../components/NewsCart';

const CategoryNews = () => {
    // const {data: news} = useLoaderData();
    // console.log(news)
    const x = useLoaderData();
    // console.log(x.data)
    const news = x.data

    return (
        <div>
            <h3 className='font-semibold mb-3 '>Dragon News Home</h3>
            <h3 className='text-sm  text-gray-400 '>{news.length}  News Found On This Category</h3>

            <div>
                {
                   news.map((singleNews) => (
                    <NewsCart key={singleNews._id} news={singleNews} ></NewsCart>
                   ))
                }
            </div>
        </div>
    );
};

export default CategoryNews;