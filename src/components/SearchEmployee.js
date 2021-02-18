import React from "react";

// TODO: Need to filter employee and handleInput
function SearchEmployee(props) {
  return (
    <form>
      <h3>Search:</h3>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        placeholder="Search"
      />
    </form>
  );
}

export default SearchEmployee;
