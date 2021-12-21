import React from "react";
import { linkToHttps } from "../utils/linkToHttps";

const imageNotFound = "https://imgp.whaleshares.io/pimgp/a/einstei1/p/image-not-found-shitpostfriday/100x150/https://img.whaleshares.io/wls-img/einstei1/d765e65f432e7e6f0d062616d19364ecdc5631da.png";

export const CardImage = ({ urlLink, src, alt }) => {
  return (
    <img
      src={linkToHttps(src) || imageNotFound}
      alt={alt}
      onClick={() => window.open(urlLink, "_blank", "noopener noreferrer")}
      style={{
        "height": "150px",
        "width": "100px",
        "cursor": "pointer"
      }}
    />
  );
};
