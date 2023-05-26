import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../useFetch";
import { useState } from "react";

const BlogDetails = () => {
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  // const [author, setAuthor] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  const { item, pending, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${item.id}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="blog-details">
      {pending && <div>Loading</div>}
      {error && <div>{error}</div>}
      {item && (
        <article>
          <h2>{item.title}</h2>
          <p>Written by {item.author}</p>
          <div>{item.body}</div>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={() => handleEdit(item.id)}>Edit</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
