import React from "react";

export const CardFooter = ({ footerText }) => {
  return (
    <h6 className="mb-2">
      <i className="text-muted">{footerText ? footerText : ""}</i>
    </h6>
  );
};