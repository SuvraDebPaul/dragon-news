import React, { use } from "react";
import { NavLink } from "react-router";
const categoriesPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categiries = use(categoriesPromise);
  console.log(categiries);
  return (
    <div className="font-bold">
      <h2>All Categories</h2>
      <div className="grid grid-cols-1 mt-5 ml-2">
        {categiries.map((category) => (
          <NavLink
            className="btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent w-full justify-start"
            key={category.id}
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
