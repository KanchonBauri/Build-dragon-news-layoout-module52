import React, { useEffect, useState } from 'react';

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data.data.news_category));
    }, []);

    return (
        <div>
            <h2 className='font-semibold mb-3 '>All Category</h2>
            <div className='flex flex-col gap-3 '>
                {
                    categories.map(categoty => (
                        <button className='btn' key={categoty.category_id}>{categoty.category_name}</button>
                    ))
                }
            </div>
        </div>
    );
};

export default LeftNavbar;