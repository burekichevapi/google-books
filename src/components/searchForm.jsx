import React from "react";

export const SearchForm = ({ query, handleSearchClick,
  handleTextUpdate, handleEnterPress, placeHolder }) => {

  return (
    <form className="form-row">
      <div className="col">
        <input
          id="searchTextBox"
          type="text"
          name="searchTextBox"
          className="col-md-4"
          placeholder={placeHolder}
          value={query}
          onChange={handleTextUpdate}
          onKeyPress={handleEnterPress}
        />
        <br />
        <br />
        <button
          id="buttonForSearchTextBox"
          type="submit"
          className="btn btn-primary"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
    </form>
  );
};