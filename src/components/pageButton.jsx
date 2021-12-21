import React from "react";

export const PageButton = ({ id, onClick, title }) => {
  return (
    <form className="form-row">
      <div className="col">
        <button
          id={id}
          type="button"
          className="btn btn-info"
          onClick={onClick}
        >
          {title}
        </button>
      </div>
    </form>
  );
}