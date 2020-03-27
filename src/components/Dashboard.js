import React from 'react'
import WorldMeters from './WorldMeters'
import DawnUpdate from './DawnUpdate'

function Dashboard() {
    return (
        <div className="dashboard">
            <DawnUpdate/>
            <WorldMeters/>

        </div>
    )
}

export default Dashboard
