import React, { useState, useEffect } from "react";
import { API } from "./Impex.js";
import { useQuery, useMutation, queryCache } from "react-query";

function Admin() {
  let [newClass, setnewClass] = useState("");
  let [newUser, setnewUser] = useState("");
  let [openInputWindow, setopenInputWindow] = useState(false);
  let [openInputWindowUser, setopenInputWindowUser] = useState(false);
  /////////////////// GET DATA FROM DB WHERE USER ////////////////////
  console.log("render...");

  const { isLoading, data, refetch } = useQuery("fetchAllData", () =>
    API.get(`alldata`)
  );
  console.log("render...");
  //////////////  PREPARE DATA FOR WORK WITH IT ////////////////
  const dataAll =
    !isLoading &&
    data.data.reduce((acc, d) => {
      const found = acc.find((a) => a.class_name === d.class_name);
      const value = {
        name: d.name,
        role: d.user_role,
        password: d.user_password,
      };
      if (!found) {
        acc.push({
          class_name: d.class_name,
          data: [value],
        });
      } else {
        found.data.push(value);
        // found.data.push(d.id);
      }
      console.log("render...");
      return acc;
    }, []);
  /////////    CREATE NEW CLASS AS ADMIN   ///////////
  async function savenewClass(evt) {
    console.log("render...");
    evt.preventDefault();
    saveanewClass();
    setnewUser("Instructor");
    savenewUser();
  }
  const [saveanewClass] = useMutation(
    () => API.post(`/setnewclass/${newClass}`),
    {
      onSuccess: () => {
        queryCache.invalidateQueries("fetchAllData");
        setopenInputWindow(false);
        setnewClass("");
        console.log("render...");
      },
    }
  );

  /////////    CREATE NEW USER AS ADMIN   ///////////
  async function savenewUser(evt) {
    evt && evt.preventDefault();

    let endpoint = "https://dashybackend.herokuapp.com/setnewuser/".concat(
      newUser
    );
    await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    setopenInputWindowUser(false);
    setnewUser("");
  }
  console.log("render...");
  return (
    <div className="flex-container">
      {isLoading ? (
        <div>C'mon database, wake up ...</div>
      ) : (
        dataAll.map((firstdata, index) => {
          return (
            <div className="flex-table" key={index}>
              <div
                className="table-container"
                role="table"
                aria-label="Classes"
                key={firstdata.class_name + index}
              >
                <div className="flex-header" role="rowgroup">
                  <div
                    className="flex-cell"
                    role="columnheader"
                    key={index + index + "0"}
                  >
                    {firstdata.class_name}
                  </div>
                  <div
                    className="flex-cell"
                    role="columnheader"
                    key={index + "buttonAddUser"}
                  >
                    {" "}
                    <button
                      className="buttonHW"
                      onClick={(e) => setopenInputWindowUser(true)}
                    >
                      Add an user
                    </button>
                  </div>
                  <div
                    className="flex-cell"
                    role="columnheader"
                    key={index + "buttonAddClass"}
                  >
                    <button
                      className="buttonHW"
                      onClick={(e) => setopenInputWindow(true)}
                    >
                      Add a class
                    </button>
                  </div>
                </div>
                {firstdata.data.map((data, index) => (
                  <div className="flex-row" role="rowgroup" key={"rg" + index}>
                    <div
                      className="flex-cell"
                      role="cell"
                      key={data.name + index + "1"}
                    >
                      {data.name}
                    </div>
                    <div
                      className="flex-cell"
                      role="cell"
                      key={data.role + index + "2"}
                    >
                      {data.role}
                    </div>
                    <div
                      className="flex-cell"
                      role="cell"
                      key={"p" + index + "2"}
                    >
                      {data.password}
                    </div>
                  </div>
                ))}
                {openInputWindow !== false && (
                  <div className="outPopUp">
                    <form className="form-container" onSubmit={savenewClass}>
                      <label>
                        Name of the new class:
                        <input
                          autoFocus
                          type="text"
                          placeholder="Enter the name of the new class"
                          value={newClass}
                          onChange={(e) => setnewClass(e.target.value)}
                        />
                      </label>
                      <input type="submit" value="Submit" className="btn" />
                    </form>
                  </div>
                )}
                {openInputWindowUser !== false && (
                  <div className="outPopUp">
                    <form className="form-container" onSubmit={savenewUser}>
                      <label>
                        Name of the new user:
                        <input
                          autoFocus
                          type="text"
                          placeholder="Enter the name of the new user"
                          value={newUser}
                          onChange={(e) => setnewUser(e.target.value)}
                        />
                      </label>
                      <input type="submit" value="Submit" className="btn" />
                    </form>
                  </div>
                )}
              </div>
            </div>
          );
        })
      )}
    </div> //menu
  );
}
export default React.memo(Admin);
