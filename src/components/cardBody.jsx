import React, { useState } from "react";
import _ from "lodash";

export const CardBody = ({ title, link, body }) => {
  const [showAllBody, setShowAllBody] = useState(false);
  const [showFullTitle, setShowFullTitle] = useState(false);

  const formatCardTitle = (title, showTitle) => {
    if (showTitle) return title;
    return title.length > 35 ? title.substring(0, 35) + "..." : title;
  };

  return (
    <div className="card-body">
      <h4 className="card-title"
        style={{ "overflowWrap": "break-word" }}
      >
        <a href={link}
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={() => setShowFullTitle(true)}
          onMouseOut={() => setShowFullTitle(false)}
        >
          {formatCardTitle(title, showFullTitle)}
        </a>
      </h4>
      <h5 className="card-subtitle mb-2">
        <div>
          {body && <div
            onMouseOver={() => setShowAllBody(true)}
            onMouseOut={() => setShowAllBody(false)}
          >
            {body[0]}
          </div>}
        </div>
        {showAllBody && _.map(body.filter(i => i !== body[0]),
          (item) =>
            <div key={item}>
              {item}
            </div>
        )}
      </h5>
    </div>
  );
};
