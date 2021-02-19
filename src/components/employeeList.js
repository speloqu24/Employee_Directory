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

    // FILTER by firstname, lastname, phone & email.
    const result = employees.filter(
      (employee) =>
        employee.name.first
          .toLowerCase()
          .startsWith(event.target.value.toLowerCase()) ||
        employee.name.last
          .toLowerCase()
          .startsWith(event.target.value.toLowerCase()) ||
        employee.phone.startsWith(event.target.value) ||
        employee.email.startsWith(event.target.value)
    );

    setFilterEmployees(result);
  };

  // SORT by first name
  const handleSort = () => {
    const employeesSort = employees.sort((a, b) =>
      a.name.first > b.name.first ? 1 : -1
    );
    setFilterEmployees([...employeesSort]);
  };

  return (
    <>
      <div
        className="jumbotron jumbotron-fluid"
        style={{ backgroundColor: "black" }}
      >
        <div className="container">
          <h1 className="display-4" style={{ color: "white" }}>
            Employee Directory
          </h1>
          <SearchEmployee
            handleInputChange={handleInputChange}
            search={search}
          />
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col" onClick={handleSort}>
              Name
            </th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
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

              <td>{employee.dob.date.slice(0, 10)}</td>
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
