import React from "react";

function Chat(i) {
  function openRequestedPopup() {
    window.open(
      "https://secvidchat.herokuapp.com/",
      "_blank",
      "noopener, noreferrer"
    );
  }
  return (
    <div className="tabcontent" onClick={openRequestedPopup}>
      <div className="contLinks">
        <div className="infoWindowChat">
          Click here. A new tab will get open. There you can choose a room
          number and a password. After you entry the room, you will get a link,
          which you can share with the other person. Once the other person
          accessed the room using the link and the password you sent, you can
          start chatting. Enjoy!
        </div>
      </div>
    </div>
  );
}
export default Chat;

//<Iframe
//url="https://secvidchat.herokuapp.com/"
//width="100%"
//height="650px"
//id="myId"
//className="myClassname"
//display="initial"
//position="relative"
///>