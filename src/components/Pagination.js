import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMultiple } from '../actions/posts';

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const dispatch = useDispatch();
  const pageNumbers = [];
  for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
    pageNumbers.push(index);
  }

  const deleteSelected = () => {
    dispatch(deleteMultiple());
  };
  return (
    <div className="footer">
      <div>
        <button onClick={deleteSelected}>Delete All</button>
      </div>
      <div className="paginationDiv">
        <nav className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Pagination;
