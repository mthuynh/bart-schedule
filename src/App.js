import React, { useState, useEffect } from 'react';
import './App.scss';
import { FromToForm } from './components/FromToForm';

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
    <div className="bart__container">
      <div className="bart__header">
        <h1 className="bart__title">Bart Schedule</h1>
        <FromToForm stations={stations} />
      </div>
    </div>
  );
}

export default App;
