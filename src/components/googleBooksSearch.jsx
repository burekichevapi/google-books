import React, { Component } from "react";
import { CardGrid } from "./cardGrid";
import { SearchForm } from "./searchForm";
import { getBooks } from "../services/googleBooksService";
import { PageButton } from "./pageButton";
import { SocialMedia } from "./socialMedia";

export default class GoogleBooksSearch extends Component {
  state = {
    books: null,
    searchQuery: "",
    currentPage: 0,
    pageSize: 20,
  };

  render() {
    const { searchQuery, books } = this.state;

    return (
      <div>
        <div className="ml-4">
          <SocialMedia />
        </div>
        <div style={{ "textAlign": "center" }}>
          <h1 className="mb-4 text-primary">
            <strong>Google Books Search</strong>
          </h1>
          <div className="align-content-center">
            <SearchForm
              placeHolder={"Search Google Books"}
              query={searchQuery}
              handleTextUpdate={this.handleSearchTextUpdate}
              handleSearchClick={this.handleSearchButtonClick}
              handleEnterPress={this.handleEnterPress}
            />
          </div>
          <div className="row">
            <div className="col">{this.renderPreviousPageButton()}</div>
            <div className="col">{this.renderNextPageButton()}</div>
          </div>
        </div>
        <br />
        <div style={{ "textAlign": "center" }}>
          <CardGrid cards={books} />
        </div>
        <br />
      </div >
    );
  }

  handleSearchTextUpdate = (pressedKey) =>
    this.setState({ searchQuery: pressedKey.target.value });

  handleSearchButtonClick = (event) =>
    this.setState({ currentPage: 0 }, () => this.handleSearch(event));

  handleEnterPress = (event) => {
    const pressedEnter = event.keyCode === 13;

    if (pressedEnter)
      this.setState({ currentPage: 0 }, () => this.handleSearch(event));
  };

  handlePreviousPage = (event) => {
    const { pageSize, currentPage } = this.state;
    const prevPage = currentPage - pageSize;

    this.setState({ currentPage: prevPage }, () => this.handleSearch(event));
  };

  handleNextPage = (event) => {
    const { pageSize, currentPage } = this.state;
    const nextPage = currentPage + pageSize;

    this.setState({ currentPage: nextPage }, () => this.handleSearch(event));
  };

  handleSearch = async (event) => {
    const { searchQuery, currentPage, pageSize } = this.state;
    event.preventDefault();

    this.setState({
      books: await getBooks(searchQuery, currentPage, pageSize),
    });
  };

  renderNextPageButton = () => {
    const { books } = this.state;

    if (books && books.length)
      return <PageButton
        id="nextPageButton"
        title="Next"
        onClick={this.handleNextPage}
      />;
  };

  renderPreviousPageButton = () => {
    const { currentPage } = this.state;

    if (currentPage > 0)
      return <PageButton
        id="previousPageButton"
        title="Previous"
        onClick={this.handlePreviousPage}
      />;
  };
}
