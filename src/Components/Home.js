import List from "./List";
import useFetch from "../useFetch";

const Home = () => {
  const { error, pending, item } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {pending && <div>Loading</div>}
      {item && <List item={item} head="All Blogs" />}
    </div>
  );
};

export default Home;
