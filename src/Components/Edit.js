import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState(null);
  const [data, setData] = useState({
    title: "",
    body: "",
    author: "",
  });
  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`http://localhost:8000/blogs/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog post");
        }
        const data = await response.json();
        setBlogPost(data);
        setData({
          title: data.title,
          body: data.body,
          author: data.author,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogPost();
  }, [id]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to update blog post");
      }
      navigate('/');
    } catch (error) {}
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      {blogPost ? (
        <form onSubmit={submitHandler}>
          <label>Blog title:</label>
          <input
            name="title"
            onChange={handleChange}
            value={data.title}
            type="text"
            required
          />
          <label>Blog body:</label>
          <textarea
            name="body"
            onChange={handleChange}
            value={data.body}
            required
          ></textarea>
          <label>Blog author:</label>
          <select name="author" onChange={handleChange} value={data.author}>
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
          <button type="submit">Save</button>
        </form>
      ) : (
        <p>Loading blog post...</p>
      )}
    </div>
  );
};

export default Edit;
