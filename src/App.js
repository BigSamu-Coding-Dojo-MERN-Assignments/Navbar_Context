import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import UserContext from './contexts/UserContext';

import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';

function App() {

    const [name, setName] = useState('Bob');

    return (
        <div className="App bg-light">
            <UserContext.Provider value={{name,setName}} >
                <Wrapper>    
                    <Navbar/>
                    <FormWrapper/>
                </Wrapper>
            </UserContext.Provider>
        </div>
    );
}

export default App;
