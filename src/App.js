import { useState } from 'react';
import './App.css';
import FolderData from './Common/folderData'
import Folder from './component/Folder';

function App() {
  const [folderItems, setFolderItems] = useState(FolderData?.items?.length > 0 ? FolderData.items : [])
  const folderName = Object.keys(FolderData).length ? FolderData?.name : ''
  return (
    <div className="App">
      <Folder folderItems={folderItems} folderName={folderName} setFolderItems={setFolderItems} />
    </div>
  );
}

export default App;
