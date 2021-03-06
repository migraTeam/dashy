import React from "react";
import {
  bookhtml,
  bookjavascript1,
  bookjavascript2,
  bookjavascript3,
  bookreact,
  booknode,
  bookall,
  addbook,
} from "./Impex.js";

function Book({ display }) {
  console.log(display);
  const openRequestedPopup = (link) => {
    window.open(link, "_blank", "noopener, noreferrer");
  };
  const booklinks = [
    "https://migracode-barcelona.github.io/syllabus/html-css/",
    "https://migracode-barcelona.github.io/syllabus/js-core/",
    "https://migracode-barcelona.github.io/syllabus/js-core-2/",
    "https://migracode-barcelona.github.io/syllabus/js-core-3/",
    "https://migracode-barcelona.github.io/syllabus/react/",
    "https://migracode-barcelona.github.io/syllabus/node/",
    "https://migracode-barcelona.github.io/syllabus/",
    "https://migracode-barcelona.github.io/syllabus/",
  ];
  const bookcovers = {
    0: bookhtml,
    1: bookjavascript1,
    2: bookjavascript2,
    3: bookjavascript3,
    4: bookreact,
    5: booknode,
    6: bookall,
    7: addbook,
  };

  return (
    <div className={display === "column" ? "tabcontent" : "tabcontent2"}>
      <div className="contLogoBooks">
        {booklinks.map((data, i) => (
          <img
            key={bookcovers[i]}
            className="logoBooks"
            src={bookcovers[i]}
            alt={bookcovers[i]}
            onClick={() => openRequestedPopup(data)}
          />
        ))}
      </div>
    </div>
  );
}
export default React.memo(Book);
