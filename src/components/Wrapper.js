import React from 'react'

const Wrapper = (props) => {

    //-----------------------------------
    // I) JSX
    // ----------------------------------

    return (
        <div className="container">
            {props.children}
        </div>
    )
}

export default Wrapper
