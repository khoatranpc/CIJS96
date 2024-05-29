import React from 'react'

const Text = (props) => {
    const day = new Date();
    return (
        <div>
            this is Text component {day.getDate()} - {day.getMonth() + 1} - {day.getFullYear()}
            {props.children}
        </div>
    )
}

export default Text;