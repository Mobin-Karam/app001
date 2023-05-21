import React from "react";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu"

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://img.freepik.com/free-photo/technology-human-touch-background-modern-remake-creation-adam_53876-129794.jpg?w=1060&t=st=1684600592~exp=1684601192~hmac=31db086c77472a0d3d12dfed5402bf5862663ff679ae4a1c5f89f63eefb9d821"
          alt=""
        />
        <div className="user">
          <img
            src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=1060&t=st=1684640109~exp=1684640709~hmac=97b7e85d4b3b9104687de4852619bf1ad056f74449e73bb1051ed20d5b72abc3"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
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
