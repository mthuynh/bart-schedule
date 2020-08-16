import React from 'react'

const Schedule = ({trips, cost}) => {
    return (
        <div className="trips">
            <p>One-way: ${cost}</p>
            {trips.map((trip, index) => {
                return (
                    <div className="trip" key={index}>
                        <div class="trip__route">
                            <p class="start">{trip["@origin"]}</p>
                            <div class="travel-time">
                            <span class="icon">&#x27A4;</span>
                            <p>{trip["@tripTime"]} min</p>
                            </div>
                            <p class="end">{trip["@destination"]}</p>
                        </div>
                        {trip.leg.length > 1 ? 
                            <div class="transfer">*Stop at {trip.leg[0]["@destination"]} and transfer to {trip.leg[1]["@trainHeadStation"]}</div>
                            : null 
                        }
                        <div class="trip__time">
                            <p class="leave">{trip["@origTimeMin"]}</p>
                            <p class="arrive">{trip["@destTimeMin"]}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Schedule
