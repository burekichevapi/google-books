import React from "react";
import { Card } from "./card";

export const BookCard = ({ book }) => {
  return (
    <Card
      title={book.title}
      src={book.imageLink}
      alt={book.title}
      urlLink={book.linkToBook}
      body={book.authors}
      footer={book.publisher}
    />
  );
};