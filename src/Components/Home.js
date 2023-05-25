import { useEffect, useState } from "react";
import List from "./List";

const Home = () => {
  const [item, setItem] = useState([null]);

  const deleteHandler = (id) => {
    const newBlog = item.filter((item) => item.id !== id);
    setItem(newBlog);
  };

  useEffect(()=>{

  },[])

  return (
    <div className="home">
      <List item={item} head="All Blogs" deleteHandler={deleteHandler} />
    </div>
  );
};

export default Home;
