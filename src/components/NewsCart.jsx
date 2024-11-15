import React from "react";
import { FaRegHeart, FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCart = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-xl max-w-full p-4">
      {/* Author and Date */}
      <div className="flex items-center mb-4">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <h2 className="font-semibold">{news.author.name}</h2>
          <p className="text-xs text-gray-500">{news.author.published_date}</p>
        </div>
        <div className="ml-auto">
          <FaRegHeart className="text-gray-400 cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h3 className="font-bold text-lg mb-3">{news.title}</h3>

      {/* Image */}
      <figure className="mb-4">
        <img src={news.image_url} alt="News" className="rounded-lg" />
      </figure>

      {/* Details */}
      <div className="text-gray-600 text-sm mb-4">
        <p>
          {news.details.slice(0, 120)}...{" "}
          <Link to={`/news/${news._id}`} className="text-blue-500 cursor-pointer">Read More</Link>
        </p>
      </div>

      {/* Rating and Views */}
      <div className="flex items-center justify-between border-t pt-2">
        <div className="flex items-center text-yellow-500">
          <FaStar />
          <span className="ml-1 font-semibold">{news.rating.number}</span>
          <span className="ml-1 text-xs text-gray-500">
            ({news.rating.badge})
          </span>
        </div>
        <div className="flex items-center text-gray-500">
          <FaEye />
          <span className="ml-1">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCart;
