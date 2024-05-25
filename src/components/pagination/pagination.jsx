import "./pagination.css";

// eslint-disable-next-line react/prop-types
const Pagination = ({ page, totalPages, onLeftClick, onRightClick }) => (
  <div className="loading-Seta">
    <button onClick={onLeftClick} className="pagination-button">
      ⬅️
    </button>
    <div>
      {page} de {totalPages}
    </div>
    <button onClick={onRightClick} className="pagination-button">
      ➡️
    </button>
  </div>
);

export default Pagination;
