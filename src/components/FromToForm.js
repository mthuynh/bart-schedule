import React from 'react'

export const FromToForm = ({stations}) => {
    return (
        <form class="bart__form">
            <select>
            {stations.map(station => <option value={station.name} key={station.abbr}>{station.name}</option>)}
            </select>
            <select>
            {stations.map(station => <option value={station.name} key={station.abbr}>{station.name}</option>)}
            </select>
            <button type="submit">Go</button>
        </form>
    )
}
