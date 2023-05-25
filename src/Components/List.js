import React from "react";
import { Link } from "react-router-dom";

function List({ item, head }) {
    
  return (
    <div className="blog-list">
      <h2>{head}</h2>
      {item.map((item) => (
        <div className="blog-preview" key={item.id}>
          <Link to={`/blogdetails/${item.id}`}>
            <h2>{item.title}</h2>
            <p>{item.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default List;
