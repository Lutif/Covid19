import React from 'react'
import WorldMeters from './WorldMeters'
import DawnUpdate from './DawnUpdate'

function Dashboard() {
    return (
        <div className="row my-2 px-0">
            <DawnUpdate />
            <WorldMeters />

        </div>
    )
}


const style={
    height:"100vh"
}
export default Dashboard
