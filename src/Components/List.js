import React from "react";

function List({ item, head, deleteHandler }) {
  return (
    <div className="blog-list">
      <h2>{head}</h2>
      {item.map((item) => (
        <div className="blog-preview" key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.author}</p>
          <button onClick={() => deleteHandler(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default List;
