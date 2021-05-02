import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useGenres from '../../useGenre';
import CustomPagination from '../CustomPagination/CustomPagination';
import Genres from '../Genres';
import SingleContent from '../SingleContent/SingleContent';


const Movies = () => {

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numofpages, setNumofpages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([])
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenres(selectedGenres);

    const fetchMovies =  async () => {
        const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=fc64614f73e1b8df6710b999bf635d15&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
        );

        setContent(data.results);
        setNumofpages(data.total_pages);
    };

    useEffect(() => {
      fetchMovies();
      // eslint-disable-next-line
    }, [page, genreforURL]);

    return (
        <div>
            <span className="pagetitle">Movies</span>
            <Genres 
                type="movie"
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}    
                setPage={setPage}
            />
            <div className='trending'>
                {
                    content && content.map((c) => (
                        <SingleContent 
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type="movie"
                            vote_average={c.vote_average}
                        />
                    ))
                }
            </div>
            {numofpages > 1 && (
            <CustomPagination setPage={setPage} numOfPages={numofpages}/>
            )}
        </div>
    )
}

export default Movies;
