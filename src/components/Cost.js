import React from 'react'
import { formatCurrency } from '../helper'

const Cost = ({ cost }) => {
    return (
        <div className="cost">
            <h3>Cost</h3>
            <div className="one-way">
                <p>One-way</p> 
                <p>{formatCurrency.format(cost)}</p>
            </div>
            <div className="round-trip">
                <p>Round trip</p> 
                <p>{formatCurrency.format(cost * 2)}</p>
            </div>
        </div>
    )
}

export default Cost
