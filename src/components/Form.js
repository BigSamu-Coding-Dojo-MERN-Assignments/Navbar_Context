import React, { useContext }  from 'react'

import userContext from '../contexts/UserContext';

const Form = () => {

    //-----------------------------------
    // I) VARIABLES
    // ----------------------------------

    const {name,setName} = useContext(userContext);

    //-----------------------------------
    // I) HANDLERS
    // ----------------------------------

    const inputHandler = (e) => {
        
        setName(e.target.value);
    }

    //-----------------------------------
    // III) JSX
    // ----------------------------------

    return (
        <div>
            <form>
                <div className="form-group row">
                    <label className="col-2 col-form-label-sm"> Your name: </label>
                    <div className="">
                        <input type="text" className="form-control-sm" onChange={ inputHandler } value={name}/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form
