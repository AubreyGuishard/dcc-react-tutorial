import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2022'}, {weight: 176, date: '11-24-2022'}, {weight: 174, date: '11-25-2022'}])
  return (
    <div>
      <DisplayEntries parentEntries={entries} />
    </div>
  );
}

export default App;
