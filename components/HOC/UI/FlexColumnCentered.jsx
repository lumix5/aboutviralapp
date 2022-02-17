import React from 'react'

const FlexColumnCentered = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-center shadow-2xl">
            {children}
        </div>
    )
}

export default FlexColumnCentered