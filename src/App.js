import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [stations, setStations] = useState([])

  useEffect(() => {
    const fetchStations = async () => {
      const response = await fetch('http://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y')
      const data = await response.json()
      setStations(data.root.stations.station)
    }

    fetchStations()
  }, [])

  return (
    <div>
      <h1>Bart Schedule</h1>
      <label htmlFor="from">From</label>
      <Form stations={stations} />
      <label htmlFor="to">to</label>
      <Form stations={stations} />
    </div>
  );
}

export default App;
