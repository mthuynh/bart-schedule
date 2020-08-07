import React from 'react';

const Form = ({ stations }) => {
    return (
        <select>
            {stations.map(station => {
                return <option value={station.name} key={station.abbr}>{station.name}</option>
            })}
        </select>
    )
}

export default Form;
