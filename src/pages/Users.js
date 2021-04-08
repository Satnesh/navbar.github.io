import React from 'react'
import {BrowserRouter as Router,Link, Route} from 'react-router-dom'
import Ais from './Ais'

function Users() {
    const slides=[
        {id:1, name: 'satnesh', email: 'satnesh@gmail.com'},
        {id:2, name: 'sam', email: 'satnes@gmail.com'},
        {id:3, name: 'peter', email: 'satne@gmail.com'},
        {id:4, name: 'bruce', email: 'satn@gmail.com'},
        {id:5, name: 'tony', email: 'sat@gmail.com'},
        ]
        return (
        <>
        <Router>
            <h1>React Dynamic </h1>
            {slides.map((item)=> 
            
            <div> <Link to={"/user/" +item.id +item.name}><h3>{item.name}</h3></Link></div>
            
            )

            }
            <Route path  ="/user/:id:name"><Ais/></Route>
            
            </Router>
            
        </>
    );
}

export default Users;
