import React from "react";
import { Book, Homeworks, Recordings, Calendar, Links, Admin } from "./Impex";

export default function MainContainer({
  index,
  userName,
  logIn,
  whichClass,
  whichRole,
  whichUserId,
}) {
  return (
    <div
      className="maincontainer"
      style={{
        height:
          logIn === 1
            ? window.innerWidth < 601
              ? "calc(100% - 139px)"
              : "calc(100% - 122px)"
            : "calc(100% - 95px)",
      }}
    >
      {
        {
          0: <Book />,
          1: (
            <Homeworks
              userName={userName}
              logIn={logIn}
              whichRole={whichRole}
              whichClass={whichClass}
              whichUserId={whichUserId}
            />
          ),
          2: (
            <Links
              userName={userName}
              logIn={logIn}
              whichClass={whichClass}
              whichRole={whichRole}
              whichUserId={whichUserId}
            />
          ),
          3: (
            <Recordings
              userName={userName}
              logIn={logIn}
              whichClass={whichClass}
              whichRole={whichRole}
            />
          ),
          4: (
            <Calendar
              userName={userName}
              logIn={logIn}
              whichClass={whichClass}
              whichRole={whichRole}
            />
          ),
          5: <Admin />,
        }[index]
      }
    </div>
  );
}
