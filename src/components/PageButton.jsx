

export const PageButton = ({ onClick, title }) => {
  return (
    <form className="form-row">
      <div className="col">
        <button
          type="submit"
          name="loadMoreCards"
          className="btn btn-secondary"
          onClick={onClick}
        >
          {title}
        </button>
      </div>
    </form>);
}