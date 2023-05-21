import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();

  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/post/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          <img
            src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=1060&t=st=1684640109~exp=1684640709~hmac=97b7e85d4b3b9104687de4852619bf1ad056f74449e73bb1051ed20d5b72abc3"
            alt=""
          />
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=1`}>
              <img src={Edit} alt="" />
            </Link>
            <Link>
              <img src={Delete} alt="" />
            </Link>
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, vel!
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae minus
          expedita sequi sunt quas, repellat rem! Maxime consequatur incidunt
          praesentium minus natus cupiditate sunt, ullam similique! Totam minus
          aut ipsum.
        </p>
        <p>
          sit amet, consectetur adipisicing elit. Vitae minus expedita sequi
          sunt quas, repellat rem! Maxime consequatur incidunt praesentium minus
          natus cupiditate sunt, ullam similique! Totam minus aut ipsum.
        </p>
        <p>
          sit amet, consectetur adipisicing elit. Vitae minus expedita sequi
          sunt quas, repellat rem! Maxime consequatur incidunt praesentium minus
          natus cupiditate sunt, ullam similique! Totam minus aut ipsum.
        </p>
        <p>
          adipisicing elit. Vitae minus expedita sequi sunt quas, repellat rem!
          Maxime consequatur incidunt praesentium minus natus cupiditate sunt,
          ullam similique! Totam minus aut ipsum.
        </p>
        <p>
          ipsum dolor sit amet, consectetur adipisicing elit. Vitae minus
          expedita sequi sunt quas, repellat rem! Maxime consequatur incidunt
          praesentium minus natus cupiditate sunt, ullam similique! Totam minus
          aut ipsum.
        </p>
      </div>
      <Menu />
    </div>
  );
};
export default Single;
