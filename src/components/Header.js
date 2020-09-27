import React, { useState, useEffect } from "react";
import logo from "../images/migracode-logo.png";
import login from "../images/login.png";

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
  let [allClass, setallClass] = useState([{ id: 3, class_name: "mar-2020-1" }]);
  let [allClassId, setallClassId] = useState([{ id: 3 }]);
  const [openInputWindow, setopenInputWindow] = useState(false);
  var [counterName, setcounterName] = useState(0);
  const ref = React.useRef();
  /////////////////   USEEFFECTS   ///////////////
  useEffect(() => {
    logIn === 1 && getInfoTochangeCLass();
    logIn === 1 && getclassNameFromDB();
    // var timerID = setInterval(() => tick(), 1000);
    // return function cleanup() {
    //   clearInterval(timerID);
    // };
  }, [logIn, userClassName, whichClass, openInputWindow]);

  useEffect(() => {
    logIn === 1 && getclassNameFromDB();
  }, [allClassId]);
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
  //////////////////  GET THE TIME  ///////////////////
  function zweistellig(s) {
    while (s.toString().length < 2) {
      s = "0" + s;
    }
    return s;
  }
  const [date, setDate] = useState(new Date());
  var time =
    zweistellig(date.getHours()) +
    ":" +
    zweistellig(date.getMinutes()) +
    ":" +
    zweistellig(date.getSeconds());

  // function tick() {
  //  setDate(new Date());
  // }

  //////////////////  GET ALL CLASS  ///////////////////
  async function getInfoTochangeCLass() {
    let endpoint = "https://dashybackend.herokuapp.com/class/";
    await fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        const arrToClass = data.map(function (daten) {
          return daten.class_name;
        });
        setallClass(arrToClass);
        const arrToClassId = data.map(function (daten) {
          return daten.id;
        });
        setallClassId(arrToClassId);
      });
  }

  //////////////////  CHANGE CLASS ///////////////////
  async function changeClass(i) {
    //whichClass = allClassId[i];
    let data = { classId: allClassId[i] };
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
  //////////////////  CHANGE COUNTER :)  ///////////////////
  function changeCounter() {
    setcounterName(counterName++);
  }
  console.log(counterName);
  return (
    <div className="header" key={whichUserHeader}>
      <div
        className="loaddiv"
        style={{
          display: counterName < 5 ? "none" : "flex",
        }}
      >
        <div
          className="loaddivTop"
          style={{
            height: counterName < 5 ? "0" : undefined,
          }}
        >
          THE
        </div>
        <div
          className="loaddivBottom"
          style={{
            height: counterName < 5 ? "10px" : undefined,
          }}
        >
          END
        </div>
      </div>
      {logIn === 1 ? (
        <div className="greeting">
          <button className="buttonHW" key="2" onClick={() => changeCounter()}>
            {whichUserHeader}
          </button>
          <button className="buttonHW" key="3">
            {whichRole}
          </button>
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
            <button className="buttonHW" key="4">
              {userClassName}
            </button>
          )}
        </div>
      ) : (
        <>.</>
      )}

      <img
        className="greeting"
        src={logIn === 1 ? logo : login}
        alt="logo"
        onClick={onHeaderClick}
      />
      {openInputWindow !== false && (
        <div className="outPopUpVariabel">
          {allClass.map((data, i) => (
            <div
              className="recordings"
              key={"divRHW" + i}
              onClick={() => onClick((whichClass = allClassId[i]))}
            >
              <div
                style={{ marginTop: "3px" }}
                key={"d" + i}
                onClick={(e) => changeClass(i)}
              >
                <button className="recordinglinks" key={i}>
                  {data}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
