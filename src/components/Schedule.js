import React from 'react'

const Schedule = ({cost, trips, stations}) => {
    return (
        <div className="trips">
            {trips.map((trip, index) => {
                return (
                    <div className="trip" key={index}>
                        <div className="trip__route">
                            <p className="start">{trip["@origin"]}</p>
                            <div className="travel-time">
                            <span className="icon">&#x27A4;</span>
                            <p>{trip["@tripTime"]} min</p>
                            </div>
                            <p className="end">{trip["@destination"]}</p>
                        </div>
                        {trip.leg.length > 1 ? 
                            <div className="trip__transfer">
                                <p>*Stop at {stations.find(station => station.abbr === trip.leg[0]["@destination"]).name} and transfer to {trip.leg[1]["@trainHeadStation"]}</p>
                            </div>
                            : null 
                        }
                        <div className="trip__time">
                            <p className="leave">{trip["@origTimeMin"]}</p>
                            <p className="arrive">{trip["@destTimeMin"]}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Schedule
