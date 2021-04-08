import {Carousel  } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Images = ({ImagesList}) =>
{
    const Arr = ImagesList.map((im,idx) => {
        return  ( 
            <Carousel.Item key = {idx}>
              <img 
              src = {im}
              />
            
          </Carousel.Item>
            
            
        )})
    return(
      <Carousel>{Arr}</Carousel>
    )
  }

  export default Images;












