import React from 'react'
import "./CharityCounter.css";

function CharityCounter() {
    return (
        <div className='charityCounter'>
            <div className="count1">
                <h3>Donator</h3>
                <p>2548</p>
            </div>
            <div className="count2">
                <h3>Fundrising</h3>
                <p>28394+</p>
            </div>
            <div className="count3">
                <h3>Volunteer</h3>
                <p>943+</p>
            </div>
            <div className="count4">
                <h3>Complete Projects</h3>
                <p>1967</p>
            </div>
        </div>
    )
}

export default CharityCounter