import { Navbar, Nav, Col, Button, Container, Row } from 'react-bootstrap';
import React, { Component, useEffect, useState } from 'react'
import NavBar from './component/NavBar';
import MovieList from './component/MovieList';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './component/MovieDetails';

function App() {
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])
  const [pageCount, setPageCont] = useState()
  
  //get popular movies
  const getMovies = async () => {
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=fdd1103c7410cae01e24a1a37c4adb88&language=en-US&page=1')
    setMovies(res.data.results)
    setPageCont(res.data.total_pages)
  }
  // get page
  const getPage = async (e) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=fdd1103c7410cae01e24a1a37c4adb88&language=en-US&page=${e}`)
    setMovies(res.data.results)
  }
  // search
  const handleSearch = async (e) => {
    if (e == "") getMovies();
    else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=fdd1103c7410cae01e24a1a37c4adb88&language=en-US&query=${e}&page=1&include_adult=false`)
      setMovies(res.data.results)
      setPageCont(res.data.total_pages)
    }
  }
  useEffect(() => {
    getMovies();
  }, [])


  return (
    <div className="App">
      <NavBar search={handleSearch} />
      <Container className='text-center'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MovieList movies={movies} getPage={getPage} pages={pageCount} />} />
            <Route path="/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
