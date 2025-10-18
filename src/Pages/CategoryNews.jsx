import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [catagoryNews, setCategoryNews] = useState([]);
  //console.log(id, data);
  useEffect(() => {
    if (id === "0") {
      setCategoryNews(data);
    } else if (id === "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick === true
      );
      // console.log(filteredNews);
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter(
        (news) => news.category_id === parseInt(id)
      );
      //console.log(filteredNews);
      setCategoryNews(filteredNews);
    }
  }, [data, id]);
  return (
    <div>
      <h2 className="font-bold mb-5">Total {catagoryNews.length} Found</h2>
      <div className="grid grid-cols-2 gap-5">
        {catagoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
