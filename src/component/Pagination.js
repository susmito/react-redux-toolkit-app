import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({ currentPage, setCurrentPage, noOfPages }) => {
    return (
        <div>
            {currentPage > 0 ?
                <button onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
                : <></>}
            {currentPage < noOfPages - 1 ?
                <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                : <></>}</div>
    )
}

Pagination.propTypes = {
    currentPage: PropTypes.number,
    setCurrentPage: PropTypes.func,
    noOfPages: PropTypes.number,
}

export default Pagination