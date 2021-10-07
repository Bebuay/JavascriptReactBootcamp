import React from "react";
import useTheme from "../../hooks/theme";

function SearchInput({ handleOnSearch }) {

  const { theme } = useTheme();

  return (
      <div className="search-container">
        <input className={`search-${theme}`} type="text" placeHolder="Search" onChange={(event) => {
            handleOnSearch(event.target.value);
          }}
        />
      </div>
  )
}

export default SearchInput;