import { useParams,useNavigate } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { item, pending, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${item.id}`,{
      method:'DELETE'
    }).then(()=>{
      navigate('/')
    })
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
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
