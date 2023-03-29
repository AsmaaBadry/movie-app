import { Route, Routes } from 'react-router-dom';
import './App.css';

import Mainheader from './Components/mainheader/mainheader';

import Movies from './Components/movies/movies';
import Moviesdetails from './Components/moviesdetails/moviesdetails';
import Notfound from './Components/notfound/notfound';

import Favorate from './Components/favoratemovies/favoratemovies';
import { useState } from 'react';
import { Languageprovider } from './context/language';

function App() {
  const [languag, setlanguage] = useState('en');
  return (
    <div className="App">
      <div>
        <Languageprovider value={{ languag, setlanguage }}>
          <Mainheader></Mainheader>

          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movies/:id" element={<Moviesdetails />} />
            <Route path="/favmovies" element={<Favorate />} />

            <Route path="*" element={<Notfound />} />
          </Routes>
        </Languageprovider>
      </div>
    </div>
  );
}

export default App;
