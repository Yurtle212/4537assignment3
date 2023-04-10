import React, { useState } from 'react'
import axios from 'axios'


function Logout({ setUser }) {
    return (
        <>
            <button onClick={setUser({})}>
                Logout
            </button>
        </>
    )
}

export default Logout