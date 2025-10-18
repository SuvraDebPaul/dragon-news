import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm p-4">
        <figure>
          <img src={news.image_url} alt={news.title} className="w-full" />
        </figure>
        <div className="card-body p-0 py-4">
          <h2 className="card-title text-2xl">{news.title}</h2>
          <p>{news.details}</p>
          <div className="card-actions justify-start">
            <Link
              to={`/category/${news.category_id}`}
              className="btn btn-secondary mt-5"
            >
              All News In This Category
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
