import React from "react";
import { BookCard } from "./bookCard";
import _ from "lodash";

export const CardGrid = ({ cards }) => {
  if (!cards) return <p></p>;
  if (!cards.length) return <p className="mt-4">No results found.</p>;

  return (
    <div className="container-xxl" data-testid="cardGrid">
      <div className="row ml-lg-5">
        {_.map(cards, (card) =>
          <div key={card.id}>
            <BookCard book={card}
            />
          </div>
        )}
      </div>
    </div>
  );
};
