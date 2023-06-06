import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  // const posts = [
  //   {
  //     id: 1,
  //     title: " Lorem ipsum, dolor sit amet consectetur adipisicing eli",
  //     desc: "Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam, repellendus a itaque odio nobis ipsam tempore aperiam ipsa fugiat omnis esse? Fugit facere enim natus fuga earum sunt laudantium.ipsum, dolor sit amet consectetur adipisicing eli",
  //     img: "https://img.freepik.com/free-photo/technology-human-touch-background-modern-remake-creation-adam_53876-129794.jpg?w=1060&t=st=1684600592~exp=1684601192~hmac=31db086c77472a0d3d12dfed5402bf5862663ff679ae4a1c5f89f63eefb9d821",
  //   },
  //   {
  //     id: 2,
  //     title: " Lorem ipsum, dolor sit amet consectetur adipisicing eli",
  //     desc: "Lorem ipsum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam, repellendus a itaque odio nobis ipsam tempore aperiam ipsa fugiat omnis esse? Fugit facere enim natus fuga earum sunt laudantium.dolor sit amet consectetur adipisicing eli",
  //     img: "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=1060&t=st=1684608201~exp=1684608801~hmac=04ec50694b358e7021ccd8aa33750ecfe9bd11d3ff33bc3209f9322c78c0cd6b",
  //   },
  //   {
  //     id: 3,
  //     title: " Lorem ipsum, dolor sit amet consectetur adipisicing eli",
  //     desc: "Lorem ipsum, dolor sit amet consectetur adipisicing eli",
  //     img: "https://img.freepik.com/free-photo/men-demonstrating-wrestling-combat-moves_23-2149749672.jpg?t=st=1684600170~exp=1684600770~hmac=3089394ee6073162ddc9e220aaeed9e727ba0fb5731a16aa369f29f360202b52",
  //   },
  // ];
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
