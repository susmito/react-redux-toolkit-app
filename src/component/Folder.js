import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Folder = ({ folderItems, folderName, id = '0', setFolderItems }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const File = ({ fileName }) => <div style={{ height: '24px', marginLeft: '12px' }}>📄&nbsp;{fileName}</div>

    return (
        <section style={{ marginLeft: id === '0' ? '' : '12px' }}>
            <div
                style={{
                    width: 'auto',
                    maxWidth: '300px',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <div style={{ cursor: 'pointer', height: '30px' }} onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? '📂' : '📁'}&nbsp;{folderName}
                </div>
                <div>
                    <button style={{ width: '50px', marginRight: '6px' }}>➕&nbsp;📂</button>
                    <button style={{ width: '50px' }}>➕&nbsp;📄</button>
                </div>
            </div>
            {
                <div
                    style={{
                        display: isExpanded ? 'block' : 'none',
                    }}
                >
                    {folderItems.length ? folderItems.map((item) =>
                        item.isFolder ? <Folder key={item.id} folderItems={item.items} folderName={item.name} id={item.id} /> : <File key={item.id} fileName={item.name} />
                    ) : <></>}
                </div>
            }
        </section>
    )
}

Folder.propTypes = {
    folderItems: PropTypes.array,
    folderName: PropTypes.string,
    id: PropTypes.string,
    setFolderItems: PropTypes.func,
}

export default Folder