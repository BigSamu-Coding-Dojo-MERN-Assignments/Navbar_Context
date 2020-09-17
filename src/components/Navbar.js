import React, { useContext }  from 'react'

import userContext from '../contexts/UserContext';

const Navbar = () => {

    //-----------------------------------
    // I) VARIABLES
    // ----------------------------------

    const {name} = useContext(userContext)

    //-----------------------------------
    // II) JSX
    // ----------------------------------

    return (
        <div>
            <div className ="bg-dark p-1">
                <p className = "text-right text-light font-weight-bold mx-4 my-0">Hello, {name}!!!</p>
            </div>
        </div>
    )
}

export default Navbar
