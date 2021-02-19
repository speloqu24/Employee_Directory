import React from "react";

function SearchEmployee(props) {
  return (
    <form>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        placeholder="Search"
        class=""
      />
    </form>
  );
}

export default SearchEmployee;
