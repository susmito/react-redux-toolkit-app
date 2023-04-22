import React, { useState } from 'react'

const TableData = ({ data, sort }) => {
    const headers = Object.keys(data[0])
    const [orderItem, setOrderItem] = useState({ item: '', orderBy: true })
    const handleFunc = (item) => {
        const stateval = orderItem.item === item ? { item, orderBy: !orderItem.orderBy } : { item, orderBy: true }
        setOrderItem(stateval)
        sort({ ...stateval })
    }
    return (
        <div style={{ margin: '0 auto', width: '600px' }}>
            <table border={'5px'}>
                <tr>
                    {headers.map(item => <th style={{ cursor: 'pointer' }} onClick={() => handleFunc(item)}>{item}</th>)}
                </tr>
                {
                    data.map(item => <>
                        <tr>
                            {Object.values(item).map(value => <td>{value}</td>)}
                        </tr>
                    </>)
                }
            </table>
        </div >
    )
}

export default TableData