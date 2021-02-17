import React, { useEffect, useState } from "react";
import API from "../utils/API";
import SearchEmployee from "./SearchEmployee";

function EmployeeList() {
  const [search, setSearch] = useState();
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [birthdate, setBirthDate] = useState();

  //   const { name, phoneNumber, email, birthday } = search;

  useEffect(() => {
    if (!search) {
      return;
    }

    API.getEmployee(search).then((res) => {
      setName(res.name.first);
      setPhoneNumber(res.phoneNumber.phone);
      setEmail(res.email.email);
      setBirthDate(res.birthdate.dob);
    });
  }, []);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div>
        <SearchEmployee
          handleInputChange={handleInputChange}
          results={search}
          //   onChange={(e) => setSearch(e.target.value)}
          //   value={name}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            {/* This onclick will organize name ABC */}
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col"> Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>
              {/* {name.first} {name.last} */}
              {name}
            </td>

            <td>
              {/* {phoneNumber} */}
              {phoneNumber}
            </td>

            <td>
              {/* {email} */}
              {email}
            </td>

            <td>
              {/* {birthdate} */}
              {birthdate}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
// add search bar at the top

// as you type in search filters

// array of people filter "onChange" to only include what the user searches for
// need to ABC, sorting method

// App.js will have onchange function
// employee array will need to be passed and sorted

export default EmployeeList;
