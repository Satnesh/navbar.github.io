import React from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';

function Gallery() {

    const color=[
        {id:1, name: 'red', email: 'satnesh@gmail.com'},
        {id:2, name: 'green', email: 'satnes@gmail.com'},
        {id:3, name: 'yellow', email: 'satne@gmail.com'},
        {id:4, name: 'blue', email: 'satn@gmail.com'},
        {id:5, name: 'violet', email: 'sat@gmail.com'},
        ]
    return (
        <div>
            <Router>
           
           
            <h3>Colors</h3>
            {color.map((item)=>
            <div> 
              <h3><Link to ={"/colors/" +item.name} >{item.name}</Link></h3>
            </div>
            )}
            <Route path  ="/colors/:id"></Route>
            </Router>
            
            


            

            

      </div>

    )
}

export default Gallery
