import React, { useContext } from 'react';
// import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Languagecontext } from '../../context/language';

const Mainheader = () => {
  const fav=useSelector(state=>state.favmovies)
  const { languag, setlanguage } = useContext(Languagecontext);
  

        return (
          <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Movies</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="text-light">
                  <Nav className="me-auto">
                    <NavLink className={({isActive})=>isActive?'text-danger mx-3':'mx-3'}  to="/">Movies</NavLink>
                 
                    <NavLink to="/favmovies" className={({isActive})=>isActive?'text-danger':''}>FavotitMovies</NavLink>

                          
                  </Nav>

                  <button type="button" class="btn btn-primary position-relative">
  Favorites
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {fav.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
                  


<button type="button" className="btn btn-primary mx-2">
language <span className="badge text-bg-secondary"> {languag}</span>
</button>

                 
               
                </Navbar.Collapse>
              </Container>
            </Navbar>

            
          );
}

export default Mainheader;