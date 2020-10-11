import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { logo, login, API, Tools } from "./Impex.js";

export default function Header({
  onHeaderClick,
  logIn,
  whichUserHeader,
  whichRole,
  whichUserId,
  whichClass,
  onClick,
}) {
  const [userClassName, setuserClassName] = useState(false);
  const [openInputWindow, setopenInputWindow] = useState(false);
  const ref = React.useRef();
  /////////////////   USEEFFECTS   ///////////////
  useEffect(() => {
    logIn === 1 && getclassNameFromDB();
    // var timerID = setInterval(() => tick(), 1000);
    // return function cleanup() {
    //   clearInterval(timerID);
    // };
  }, [logIn, userClassName, whichClass, openInputWindow]);

  /////////////////   GET USER CLASS NAME   ///////////////

  async function getclassNameFromDB() {
    await fetch("https://dashybackend.herokuapp.com/userclassname")
      .then((response) => response.json())
      .then((data) => {
        setuserClassName(
          data[data.findIndex((element) => element.name === whichUserHeader)]
            .class_name
        );
      });
  }
  //////////////  GET ALL CLASS  AXIOS /////////////
  const { isLoading, error, data, isFetching, refetch } = useQuery(
    "getClass",
    () => API.get(`class/`)
  );
  const classes = !isLoading && data.data;

  //////////////////  CHANGE CLASS ///////////////////
  async function changeClass(i) {
    let data = { classId: classes[i].id };
    await fetch(
      "https://dashybackend.herokuapp.com/switchclass/".concat(whichUserId),
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }
    );
    setopenInputWindow(false);
  }

  return (
    <div className="header" key={whichUserHeader}>
      {logIn === 1 ? (
        <div className="greeting">
          <span className="buttonHW1" key="2">
            {whichUserHeader}
          </span>
          <span className="buttonHW1" key="3">
            {whichRole}
          </span>
          {whichRole !== "Student" ? (
            <button
              className="buttonHW"
              key="4"
              onClick={() => setopenInputWindow("1")}
            >
              {userClassName}
              <span className="tooltiptext">Change your class</span>
            </button>
          ) : (
            <span className="buttonHW1" key="4">
              {userClassName}
            </span>
          )}
        </div>
      ) : (
        <>.</>
      )}
      {logIn === 1 && window.innerWidth > 600 ? <Tools /> : undefined}
      <div className="greeting">
        <img
          className="loginlogo"
          src={logIn === 1 ? logo : login}
          alt="logo"
          onClick={onHeaderClick}
        />
      </div>
      {openInputWindow !== false &&
        (isLoading ? (
          <div>C'mon database, wake up ...</div>
        ) : (
          <div className="outPopUpVariabel">
            {classes.map((data, i) => (
              <div
                className="recordingslinks"
                key={"divRHW" + i}
                onClick={() => onClick((whichClass = classes[i].id))}
              >
                <div
                  style={{ marginTop: "3px" }}
                  key={"d" + i}
                  onClick={(e) => changeClass(i)}
                >
                  <button className="recordinglinks" key={i}>
                    {data.class_name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}
