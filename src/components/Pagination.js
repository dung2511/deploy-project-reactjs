import ReactPaginate from "react-paginate";

const Pagination = ({ sumProduct, limit, setPage }) => {
  // console.log(sumProduct);
  // console.log(limit);
  const page = Math.ceil(sumProduct / limit);
  const handlePageClick = (event) => {
    console.log(event);
    if (isNaN(parseFloat(event.selected)) || event.selected === 0) {
      setPage(event.selected);
    } else {
      setPage(event.selected + 1);
    }
  };
  return (
    <>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={page}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
};
export default Pagination;
