import React, { useEffect, useState } from "react";
import API from "../utils/API";
import SearchEmployee from "./SearchEmployee";

function EmployeeList() {
  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([]);

  // STORES state for filtered employees
  const [filterEmployees, setFilterEmployees] = useState([]);

  useEffect(() => {
    API.getEmployee().then((res) => {
      setEmployees(res.data.results);
      setFilterEmployees(res.data.results);
    });
  }, []);

  const handleInputChange = (event) => {
    setSearch(event.target.value);

    // FILTER through employees array
    const result = employees.filter(
      (employee) =>
        // FILTER by first name
        employee.name.first
          .toLowerCase()
          .startsWith(event.target.value.toLowerCase()) ||
        // FILTER by last name
        employee.name.last
          .toLowerCase()
          .startsWith(event.target.value.toLowerCase()) ||
        // FILTER by phone
        employee.phone.startsWith(event.target.value) ||
        // FILTER by email
        employee.email.startsWith(event.target.value)
    );

    setFilterEmployees(result);
  };

  // TODO: what is up with the SORT?! research
  const handleSort = () => {
    const sort = employees.sort((a, b) =>
      a.name.first > b.name.first ? 1 : -1
    );
    setFilterEmployees(sort);
    console.log(filterEmployees);
  };

  return (
    <>
      <div>
        <SearchEmployee handleInputChange={handleInputChange} search={search} />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col" onClick={() => handleSort()}>
              Name
            </th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          {/* {console.log(filterEmployees)} */}
          {filterEmployees.map((employee) => (
            <tr key={employee.login.uuid}>
              <td>
                <img src={employee.picture.thumbnail} alt="employeePicture" />
              </td>
              <td>
                {employee.name.first} {employee.name.last}
              </td>
              <td>{employee.phone}</td>

              <td>{employee.email}</td>

              <td>{employee.dob.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

// as you type in search filters

// array of people filter "onChange" to only include what the user searches for
// need to ABC, sorting method

// App.js will have onchange function
// employee array will need to be passed and sorted

export default EmployeeList;
