import http from "./httpService";
import { mapToBooks } from "./mapper";

const googleBooksApi = "https://www.googleapis.com/books/v1/volumes";

export async function getBooks(query, page, pageSize) {
  const pagination = `&startIndex=${page}&maxResults=${pageSize}`;
  const req = googleBooksApi + `${formatQuery(query)}` + pagination;

  try {
    const resp = await http.get(req);
    const books = mapToBooks(resp.data.items);

    return books;
  } catch (ex) {
    console.log(ex);
    return ex;
  }
}

const formatQuery = (query) => {
  if (query) return "?q=" + query.trim().replace(" ", "+");
};
