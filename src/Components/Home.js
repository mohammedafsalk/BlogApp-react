import { useState } from "react";

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

  const handleclick = (title) => {
    setItem(title);
  };
  return (
    <div className="home">
      {item.map((item) => (
        <div className="blog-preview">
        <h2>{item.title}</h2>
        <p>{item.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
