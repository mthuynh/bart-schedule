import React from 'react'

const SelectStation = ({stations, location, updateLocation}) => {
    return (
        <select value={location} onChange={updateLocation}>
            {stations.map(station => <option key={station.abbr} value={station.abbr}>{station.name}</option>)}
        </select>
    )
}

export default SelectStation