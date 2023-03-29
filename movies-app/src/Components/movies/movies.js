import React, { useEffect, useState } from "react";
import axiosInstance from "./../../axiosConfig/axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import addmovies from './../../store/action/addmovies';
import setmovise from './../../store/action/sitmoves';

const Movies = () => {
  const addFav = useSelector((state)=>state.favmovies)
  // const [movies, setmovies] = useState([]);
  const [pages, setpages] = useState(1);
  const urlToImage = "https://image.tmdb.org/t/p/w500/";
  const dispatch=useDispatch()
  const movies=useSelector((state)=>state.setmove)

  useEffect(()=>{
    axiosInstance
      .get(`movie/popular?page=${pages}`)
      .then((res) => {
        console.log(res.data.results);
      //  dispatch( setmovies(res.data.results))
      dispatch( setmovise())
      })
      .catch((err) => {
        console.log(err);
      });

   
}, [pages])
  // useEffect(() => {
  //   axiosInstance
  //     .get(`movie/popular?page=${pages}`)
  //     .then((res) => {
  //       console.log(res.data.results);
  //       setmovies(res.data.results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [pages]);
  const handleprv = () => {
    setpages(pages - 1);
  };
  const handlenext = () => {
    setpages(pages + 1);
  };

  function handleddmov(item){ 
    console.log(item);
    dispatch(
     addmovies(item)

    )
}
  return (
    
    <>
    <div className="d-flex flex-wrap">

      {movies.map((items) => {
     return <div key={items.id}>
     <Card className="m-5" style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              src={`${urlToImage}/${items.poster_path} `}
           
            />
            <Card.Body>
            <Card.Title><Link to={`/movies/${items.id}`} className="text-dark" style={{ textDecoration: "none" }}>{items.title}</Link> </Card.Title>
          

            <div> <button style={{background: "none", border: "none", outline: "none", lineHeight: "0"}} onClick={()=>handleddmov(items)} >{addFav.includes(items.id) ? <i class="fa-solid fa-heart text-danger w-50"></i> :  <i class="fa-solid fa-heart text-dark w-50"></i>}</button></div>
             
            </Card.Body>
          </Card>
          </div>
                })}
  


</div>
            <div className="d-flex justify-content-around my-5">
                <div >
                    <Button disabled={pages === 1} onClick={() => handleprv()}>previous</Button>
                </div>
                <div >
                    <Button disabled={pages === 20} onClick={() => handlenext()}>next</Button>
                </div>
            </div>
        </>
    )
}
export default Movies;
