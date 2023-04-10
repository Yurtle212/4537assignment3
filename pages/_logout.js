import React, { useState } from 'react'
import axios from 'axios'


function Logout({ setUser, user }) {
    let handleClick = () => {
        setUser({})
    }

    return (
        <>
            <button onClick={handleClick}>
                Logout
            </button>
        </>
    )
}

export default Logout