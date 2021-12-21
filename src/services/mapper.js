import Book from "../models/book";
import _ from "lodash";

export const mapToBooks = (googleBooks) => {
  const books = [];

  _.map(googleBooks, (googleBook) => {
    const id = googleBook.id;
    const title = googleBook.volumeInfo.title;
    const authors = googleBook.volumeInfo.authors;
    const publisher = googleBook.volumeInfo.publisher;
    const imageLink = googleBook.volumeInfo.imageLinks?.smallThumbnail;
    const linkToBook = googleBook.volumeInfo.previewLink;

    books.push(new Book(id, title, authors, publisher, imageLink, linkToBook));
  });

  return books;
};
