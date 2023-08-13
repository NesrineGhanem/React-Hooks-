import React from "react";
import Card from 'react-bootstrap/Card';

const MovieCard =(props)=>{
    return(
        <div>

     

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  src={props.el.img} style={{width:'200px'}}/>
      <Card.Body>
      <Card.Title>title:{props.el.title}</Card.Title>
              <Card.Text>description:{props.el.description}</Card.Text>
              <Card.Text>posterurl:{props.el.posterurl}</Card.Text>
              <Card.Text>rating:{props.el.rating}</Card.Text>
      </Card.Body>
    </Card>
        </div>
    )
}

export default MovieCard ;