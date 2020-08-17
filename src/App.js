import React, { useState, useEffect } from 'react';
import './App.scss';
import SelectStation from './components/SelectStation';
import Schedule from './components/Schedule';
import Cost from './components/Cost';

function App() {
  const [stations, setStations] = useState([])
  const [start, setStart] = useState()
  const [end, setEnd] = useState()
  const [trips, setTrips] = useState([])
  const [cost, setCost] = useState()

  useEffect(() => {
    const fetchStations = async () => {
      const response = await fetch('http://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y')
      const data = await response.json()
      setStart(data.root.stations.station[0].abbr)
      setEnd(data.root.stations.station[1].abbr)
      setStations(data.root.stations.station)
    }

    fetchStations()
  }, [])

  useEffect(() => {
    const fetchStations = async () => {
      const response = await fetch(`http://api.bart.gov/api/sched.aspx?cmd=arrive&orig=${start}&dest=${end}&date=now&key=MW9S-E7SL-26DU-VV8V&b=0&a=4&l=1&json=y`)
      const data = await response.json()
      console.log(data)
      setTrips(data.root.schedule.request.trip)
      setCost(data.root.schedule.request.trip[0]["@fare"])
    }

    fetchStations()
  }, [start, end])

  function updateStartLocation(e) {
    setStart(e.target.value)
  }

  function updateEndLocation(e) {
    setEnd(e.target.value)
  }

  function reverseRoute(e) {
    e.preventDefault();

    setStart(end);
    setEnd(start);
  }

  return (
    <div className="bart__container">
      <div className="bart__header">
        <h1 className="bart__title">b<span className="title-a">a</span>rt schedule</h1>
      </div>
      
      <form className="bart__form" onSubmit={reverseRoute}>
        <SelectStation 
          stations={stations} 
          location={start} 
          updateLocation={updateStartLocation} />
        <SelectStation 
          stations={stations} 
          location={end} 
          updateLocation={updateEndLocation} />
        <button type="submit">&#8593;&#8595;</button>
      </form>

      <Cost cost={cost} />
      
      <Schedule
        stations={stations}
        trips={trips} 
        />
    </div>
  );
}

export default App;
