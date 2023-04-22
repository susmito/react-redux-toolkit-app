import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({ currentPage, setCurrentPage, noOfPages }) => {
    const PagesElement = () => {
        const arr = []
        for (let i = 0; i < noOfPages; i++) {
            arr.push(<button onClick={() => setCurrentPage(i)}>{`${i + 1}`}</button>)
        }
        return arr
    }
    return (
        <div className='pagination-div'>
            {currentPage > 0 ?
                <button className='pagination-btn' onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
                : <></>}
            <PagesElement />
            {currentPage < noOfPages - 1 ?
                <button className='pagination-btn' onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                : <></>}</div>
    )
}

Pagination.propTypes = {
    currentPage: PropTypes.number,
    setCurrentPage: PropTypes.func,
    noOfPages: PropTypes.number,
}

export default Pagination