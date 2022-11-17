import React, { useState } from 'react'
import {Row } from 'react-bootstrap'

import ReactPaginate from 'react-paginate';
const Pagenation = ({ getPage, pages }) => {
    const handlePageClick = (e) => {
        getPage(e.selected + 1);
    }
    return (

        <Row>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pages || 500}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName={"pagination justify-content-center p-3"}
                pageClassName={"page-item "}
                pageLinkClassName={"page-link"}

                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}

                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}

                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}

                activeClassName={"active"}
            />
        </Row>

    )
}

export default Pagenation
