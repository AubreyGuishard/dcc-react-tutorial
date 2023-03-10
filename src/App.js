import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2022'}, {weight: 176, date: '11-24-2022'}, {weight: 174, date: '11-25-2022'}])
  function addNewEntry(entry){
    
    let tempEntries = [...entries, entry];
    
    setEntries(tempEntries);
  }

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm addNewEntryProperty={addNewEntry}/>
    </div>
  );
}

export default App;
