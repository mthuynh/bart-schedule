import React from 'react'

const Schedule = ({trips, cost}) => {
    return (
        <div className="trips">
            <p>One-way: ${cost}</p>
            <p>Round-trip: ${cost * 2}</p>
            {trips.map((trip, index) => {
                return (
                    <div className="trip" key={index}>
                        <p>{trip["@origTimeMin"]}</p>
                        <p>{trip["@tripTime"]}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Schedule
