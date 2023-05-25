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
    { title: "My New Table", body: "lorem ipsum....", author: "Mario", id: 4 },
    { title: "My New Bike", body: "lorem ipsum....", author: "Claw", id: 5 },
    { title: "My New Google", body: "lorem ipsum....", author: "Dev", id: 6 },
    { title: "My New Instgram", body: "lorem ipsum....", author: "Claw", id: 7 },
  ]);

  return (
    <div className="home">
      <List item={item} head="All Blogs"/>
    </div>
  );
};

export default Home;
