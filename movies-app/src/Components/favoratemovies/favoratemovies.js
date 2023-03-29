import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';
import removemovies from './../../store/action/removemovies';
import { Button } from 'react-bootstrap';


const Favorate= () =>{
    const favMovies=useSelector(state=>state.favmovies)
    console.log(favMovies);
    const dispatch=useDispatch()
    const urlToImage = "https://image.tmdb.org/t/p/w500/"
    function handelremove(ind){ 
        favMovies.splice(ind,1)
        console.log(favMovies);
        dispatch( removemovies(favMovies))  
    }
    return (
        <div className='row'>
            {favMovies.map((item,index)=>
             <Card key={index} style={{ width: '22rem', height: '450px', margin: '20px' }} >

              <Card.Img
              variant="top"
              src={`${urlToImage}/${item.poster_path} `}
              style={{ width: "330px",height:"300px" }}
            />
                                      <Card.Body>
                                          <Card.Title>{item.title}</Card.Title>
                                         
                    <Button style={{background: "none", border: "none", outline: "none", lineHeight: "0"}} onClick={()=>handelremove(index)}> <i class="fa-solid fa-trash-can text-danger w-25"></i> </Button> 
                </Card.Body>
            </Card>)}
     </div>
    );
}



 export default Favorate;