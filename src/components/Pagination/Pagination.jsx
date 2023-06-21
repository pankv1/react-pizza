import React from "react";
import styles from './Pagination.module.scss'
import ReactPaginate from 'react-paginate';

const Pagination = ({currentPage, onChangePage}) => {
  return <ReactPaginate
  className={styles.root}
    breakLabel="..."
    nextLabel=">"
    onPageChange={(event)=>onChangePage(event.selected + 1)}
    pageRangeDisplayed={4}
    forcePage={currentPage - 1}
    pageCount={3}
    previousLabel="<"
    renderOnZeroPageCount={null}
  />
};

export default Pagination;
