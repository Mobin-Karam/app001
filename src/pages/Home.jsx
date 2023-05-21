import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: " Lorem ipsum, dolor sit amet consectetur adipisicing eli",
      desc: "Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam, repellendus a itaque odio nobis ipsam tempore aperiam ipsa fugiat omnis esse? Fugit facere enim natus fuga earum sunt laudantium.ipsum, dolor sit amet consectetur adipisicing eli",
      img: "https://img.freepik.com/free-photo/technology-human-touch-background-modern-remake-creation-adam_53876-129794.jpg?w=1060&t=st=1684600592~exp=1684601192~hmac=31db086c77472a0d3d12dfed5402bf5862663ff679ae4a1c5f89f63eefb9d821",
    },
    {
      id: 2,
      title: " Lorem ipsum, dolor sit amet consectetur adipisicing eli",
      desc: "Lorem ipsum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam, repellendus a itaque odio nobis ipsam tempore aperiam ipsa fugiat omnis esse? Fugit facere enim natus fuga earum sunt laudantium.dolor sit amet consectetur adipisicing eli",
      img: "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=1060&t=st=1684608201~exp=1684608801~hmac=04ec50694b358e7021ccd8aa33750ecfe9bd11d3ff33bc3209f9322c78c0cd6b",
    },
    {
      id: 3,
      title: " Lorem ipsum, dolor sit amet consectetur adipisicing eli",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing eli",
      img: "https://img.freepik.com/free-photo/men-demonstrating-wrestling-combat-moves_23-2149749672.jpg?t=st=1684600170~exp=1684600770~hmac=3089394ee6073162ddc9e220aaeed9e727ba0fb5731a16aa369f29f360202b52",
    },
    {
      id: 4,
      title: " Lorem ipsum, dolor sit amet consectetur adipisicing eli",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing eli",
      img: "https://img.freepik.com/free-psd/book-hardcover-mockup_125540-382.jpg?w=740&t=st=1684646430~exp=1684647030~hmac=c0654d0f826cab12d2e3de8d1d6598253257650db33d6f3e101a95a333b64250",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post">
           <div className="img">
                <img src={post.img} alt="" />
              </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc} </p>
              <button>Read More</button>
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default Home;
