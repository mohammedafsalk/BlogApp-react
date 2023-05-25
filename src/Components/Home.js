import { useState } from "react";
import List from "./List";

const Home = () => {
  const [item, setItem] = useState([
    {
      title: "My New Website",
      body: "lorem ipsum....",
      author: "Mario",
      id: 1,
    },
    { title: "My New Cookie", body: "lorem ipsum....", author: "Dev", id: 2 },
    { title: "My New Table", body: "lorem ipsum....", author: "Claw", id: 3 },
  ]);

  return (
    <div className="home">
      <List item={item}/>
    </div>
  );
};

export default Home;
