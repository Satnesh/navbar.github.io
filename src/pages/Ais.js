import React from 'react'
import {withRouter} from 'react-router-dom'


function Ais(prop) {
   
    
    return (
        <>
        <h1>Hi this is user no {prop.match.params.id}</h1>
        <h1>Hi this is  {prop.match.params.name}</h1>
        </>
    )
}

export default withRouter(Ais);
