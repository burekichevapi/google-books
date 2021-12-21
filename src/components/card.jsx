import React from "react";
import { CardImage } from "./cardImage";
import { CardBody } from "./cardBody";
import { CardFooter } from './cardFooter';

export const Card = ({ title, src, alt, urlLink, body, footer }) => {
  return (
    <div className="col">
      <div
        className="card mt-2 mb-2"
        style={{ "inlineSize": "300px" }}>
        <div className="mt-4">
          <CardImage
            src={src}
            alt={alt}
            urlLink={urlLink}
          />
        </div>
        <CardBody
          title={title}
          link={urlLink}
          body={body}
        />
        <CardFooter footerText={footer} />
      </div>
    </div>
  );
};