import React from 'react'
import { Row, Card, Col, Button } from 'react-bootstrap'
import CardMovie from './CardMovie'
import Pagenation from './Pagenation'
const MovieList = ({ movies, getPage, pages }) => {
  
  return (
    <Row className='my-3'>
      {
        movies.length ? (
          movies.map((e) => {
            return <CardMovie key={e.id} mov={e} />
          })
        ) : <h1>no movies</h1>
      }
      <Pagenation getPage={getPage} pages={pages} />
    </Row>
  )
}

export default MovieList
