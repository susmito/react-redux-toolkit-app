import React, { useState } from 'react'

const TableData = ({ data, sort }) => {
    const headers = Object.keys(data[0])
    // true means ascending
    const [orderItem, setOrderItem] = useState({ item: '', orderBy: true })
    const handleFunc = (item) => {
        const stateval = orderItem.item === item ? { item, orderBy: !orderItem.orderBy } : { item, orderBy: true }
        setOrderItem(stateval)
        sort({ ...stateval })
    }
    return (
        <>
            <h4>Please click on the column headers to sort by the column</h4>
            <div className='data-table-wrapper'>
                <table className='data-table'>
                    <thead>
                        <tr>
                            {headers.map(item => <th style={{ cursor: 'pointer' }} onClick={() => handleFunc(item)}>{`${item}${orderItem.item === item ? (orderItem.orderBy ? '(Asc.)' : '(Desc.)') : ''}`}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(item => <>
                                <tr>
                                    {Object.values(item).map(value => <td>{value}</td>)}
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div >
        </>
    )
}

export default TableData