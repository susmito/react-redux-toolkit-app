import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TableData from './TableData'
import { GET_DATA_RECIEVED } from '../@Redux/reducers/reducer1'

// get the data from the api and display in table
// pagination on client side (10 rows per page) with page numbers
// sort by key
// filter
// some css

const Dashoboard = () => {
    const dispatch = useDispatch()
    const jsonData = useSelector(state => state.reducer1.jsonData || [])
    const [currentPage, setCurrentPage] = useState(0)
    const [filterKey, setFilterKey] = useState('')
    const filteredJsonData = jsonData.filter((item) => Object.values(item).join('').toLowerCase().includes(filterKey))
    const rowsPerPage = 10
    const noOfPages = jsonData.length / rowsPerPage
    const currenntData = filteredJsonData.slice(currentPage * 10, (currentPage + 1) * 10)
    const [paginatedData, setPaginatedData] = useState(currenntData)
    useEffect(() => {
        dispatch({ type: 'GET_DATA' })
    }, [])

    useEffect(() => {
        setPaginatedData(currenntData)
    }, [jsonData, currentPage, filterKey])

    const handleChange = (e) => {
        setFilterKey(e.target.value)
    }

    const sort = ({ item = '', orderBy = true }) => {
        const data = [...jsonData]
        data.sort((a, b) => {
            if (orderBy) {
                if (a[item] < b[item]) return -1
                if (a[item] > b[item]) return 1
            } else if (!orderBy) {
                if (a[item] < b[item]) return 1
                if (a[item] > b[item]) return -1
            }
            return 0
        })
        dispatch({ type: `${GET_DATA_RECIEVED}`, payload: [...data] })
    }

    return (
        <>
            <div style={{ marginBottom: '16px' }}>Filter:
                <input type="text" onChange={(e) => handleChange(e)} value={filterKey} />
            </div>
            {paginatedData.length > 0 ? <TableData data={paginatedData} sort={sort} /> : <h2>Fetching the data</h2>}
            <div>{currentPage > 0 ? <button onClick={() => setCurrentPage(currentPage - 1)}>Prev</button> : <></>}{currentPage < noOfPages - 1 ? <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button> : <></>}</div>
        </>
    )
}

export default Dashoboard