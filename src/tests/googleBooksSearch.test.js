import React from "react";
import { render, screen } from "@testing-library/react";
import GoogleBooksSearch from "../components/googleBooksSearch";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

test("googleBooksSearch - On initial load, buttonForSearchTextBox renders", () => {
  render(<GoogleBooksSearch />);

  const buttonForSearchTextBox = screen.getByRole("button", {
    id: /buttonForSearchTextBox/,
  });

  expect(buttonForSearchTextBox).toBeInTheDocument();
});

test("googleBooksSearch - On initial load, searchTextBox renders", () => {
  render(<GoogleBooksSearch />);

  const searchTextBox = screen.getByRole("textbox", { id: /searchTextBox/ });

  expect(searchTextBox).toBeInTheDocument();
});

test("googleBooksSearch - On initial load, previousPageButton does NOT render", () => {
  render(<GoogleBooksSearch />);

  const previousPageButton = screen.queryByText("Previous");

  expect(previousPageButton).not.toBeInTheDocument();
});

test("googleBooksSearch - On initial load, nextPageButton does NOT render", () => {
  render(<GoogleBooksSearch />);

  const previousPageButton = screen.queryByText("Next");

  expect(previousPageButton).not.toBeInTheDocument();
});

test("googleBooksSearch - On empty search, noResultsFound renders", async () => {
  render(<GoogleBooksSearch />);

  userDoesGoogleBooksSearch("");

  const noResultsFound = await screen.findByText("No results found.");

  expect(noResultsFound).toBeTruthy();
});

test("googleBooksSearch - On empty search, nextPageButton does NOT render", () => {
  render(<GoogleBooksSearch />);

  userDoesGoogleBooksSearch("");

  const nextPageButton = screen.queryByText("Next");

  expect(nextPageButton).not.toBeInTheDocument();
});

test("googleBooksSearch - On empty search, prevPageButton does NOT render", () => {
  render(<GoogleBooksSearch />);

  userDoesGoogleBooksSearch("");

  const prevPageButton = screen.queryByText("Previous");

  expect(prevPageButton).not.toBeInTheDocument();
});

test("googleBooksSearch - On search, cardGrid renders", async () => {
  render(<GoogleBooksSearch />);

  userDoesGoogleBooksSearch("robert martin");

  const card = await screen.findByTestId(/cardGrid/);

  expect(card).toBeInTheDocument();
});

test("googleBooksSearch - On search, nextPageButton renders", async () => {
  render(<GoogleBooksSearch />);

  userDoesGoogleBooksSearch("robert martin");

  const nextPageButton = await screen.findByText("Next");

  expect(nextPageButton).toBeInTheDocument();
});

test("googleBooksSearch - On search then nextPageButton click, previousPageButton renders", async () => {
  render(<GoogleBooksSearch />);

  userDoesGoogleBooksSearch("robert martin");

  await userClicksNextButton();

  const prevPageButton = await screen.findByText("Previous");
  expect(prevPageButton).toBeInTheDocument();
});

test("googleBooksSearch - On search then nextPageButton click then prevPageButton click, previousPageButton does NOT render", async () => {
  render(<GoogleBooksSearch />);

  userDoesGoogleBooksSearch("robert martin");

  await userClicksNextButton();

  const prevPageButton = await screen.findByText("Previous");
  userEvent.click(prevPageButton);

  expect(prevPageButton).not.toBeInTheDocument();
});

const userDoesGoogleBooksSearch = (query) => {
  const searchTextBox = screen.getByRole("textbox", { id: /searchTextBox/ });
  userEvent.type(searchTextBox, query);

  const buttonForSearchTextBox = screen.getByRole("button", {
    id: /buttonForSearchTextBox/,
  });
  userEvent.click(buttonForSearchTextBox);
  jest.fn((e) => e.preventDefault());
};

const userClicksNextButton = async () => {
  const nextPageButton = await screen.findByText("Next");
  userEvent.click(nextPageButton);
};
