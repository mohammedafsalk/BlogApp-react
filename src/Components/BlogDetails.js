import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { item, pending, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );

  return (
    <div className="blog-details">
      {pending && <div>Loading</div>}
      {error && <div>{error}</div>}
      {item && (
        <article>
          <h2>{item.title}</h2>
          <p>Written by {item.author}</p>
          <div>{item.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
