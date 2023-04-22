import React from 'react'
import PropTypes from 'prop-types'

const Filter = ({ handleChange, filterKey }) => {
    return (
        <div className='filterDiv'>
            <label>Filter:&nbsp;</label>
            <input type="text" onChange={(e) => handleChange(e)} value={filterKey} />
        </div>
    )
}

Filter.propTypes = {
    handleChange: PropTypes.func,
    filterKey: PropTypes.string,
}

export default Filter