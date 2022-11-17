import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const MovieDetails = () => {
    const param = useParams();
    const [movie, setMovie] = useState([])
    
    //get movie by id
    const getMovieDetails = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=fdd1103c7410cae01e24a1a37c4adb88&language=en-US`)
        setMovie(res.data)
    }
    useEffect(() => {
        getMovieDetails();
    }, [])
    return (
        <div>
            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-4 ">
                    <div className="card-detalis  d-flex align-items-center ">
                        <img
                            className="img-movie w-30"
                            src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                            alt="ascad"
                        />
                        <div className="justify-content-center text-center  mx-auto">
                            <p className="card-text-details border-bottom">
                                {movie.title}
                            </p>
                            <p className="card-text-details border-bottom">
                                :{movie.release_date}
                            </p>
                            <p className="card-text-details border-bottom">
                                : {movie.vote_count}
                            </p>
                            <p className="card-text-details border-bottom">
                                :{movie.vote_average}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-1 ">
                    <div className="card-story  d-flex flex-column align-items-start">
                        <div className="text-end p-4 ">
                            <p className="card-text-title border-bottom">description</p>
                        </div>
                        <div className="text-end px-2">
                            <p className="card-text-story">{movie.overview}</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col
                    md="10"
                    xs="12"
                    sm="12"
                    className="mt-2 d-flex justify-content-center ">
                    <Link to="/">
                        <Button

                            className="btn btn-dark mx-2">
                            back
                        </Button>
                    </Link>
                    <a href={movie.homepage} >
                        <Button

                            className="btn btn-light">
                            watch movie
                        </Button>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default MovieDetails
