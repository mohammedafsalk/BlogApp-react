import { useEffect, useState } from "react";
import List from "./List";

const Home = () => {
  const [item, setItem] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  const deleteHandler = (id) => {
    const newBlog = item.filter((item) => item.id !== id);
    setItem(newBlog);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("  http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("Fetching Not Completed.Some Error Occurred");
          }
          return res.json();
        })
        .then((data) => {
          setItem(data);
          setPending(false);
          setError(null)
        })
        .catch((err) => {
          setPending(false)
          setError(err.message)
        });
    }, 2000);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {pending && <div>Loading</div>}
      {item && (
        <List item={item} head="All Blogs" deleteHandler={deleteHandler} />
      )}
    </div>
  );
};

export default Home;
