import React from "react";

function List({item}) {
  return (
    <div className="blog-list">
      {item.map((item) => (
        <div className="blog-preview">
          <h2>{item.title}</h2>
          <p>{item.author}</p>
        </div>
      ))}
    </div>
  );
}

export default List;
