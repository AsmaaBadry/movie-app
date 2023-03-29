import React, { useEffect, useState } from 'react';
import axiosInstance from './../../axiosConfig/axios';

import Card from 'react-bootstrap/Card';

import { useParams } from 'react-router-dom';

const Moviesdetails = () => {
    const [movies, setmovies] = useState([]);
    const urlToImage = "https://image.tmdb.org/t/p/w500/"
    const {id}=useParams ()

    useEffect(() => {
       
        axiosInstance.get(
           `movie/${id}`).then((res) => {
               console.log((res.data)
               )
               setmovies(res.data)
   
           })
               .catch((err) => {
                   console.log(err);
               })
       }, [])
    return (
      <div>
          <Card className="m-5" style={{ width: "50%" }}>
                <Card.Img variant="top" src={`${urlToImage}/${movies.backdrop_path} `} />
                <Card.Body>
                    <Card.Title>{movies.title}</Card.Title>
                    <Card.Text>{movies.overview}</Card.Text>
                    <Card.Text>{movies.id}</Card.Text>
                </Card.Body>
            </Card>

 

</div>
            )
        }
   


export default Moviesdetails;
