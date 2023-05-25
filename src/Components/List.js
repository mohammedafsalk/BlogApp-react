import React from "react";

function List({item,head}) {
  return (
    <div className="blog-list">
        <h2>{head}</h2>
      {item.map((item) => (
        <div className="blog-preview">
          <h2>{item.title}</h2>
          <p>{item.author}</p>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default List;
