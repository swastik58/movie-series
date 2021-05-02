//import { Container } from '@material-ui/core';
import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import CustomPagination from '../CustomPagination/CustomPagination';
import SingleContent from '../SingleContent/SingleContent';
import './Trending.css';


const Trending = () => {  

    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);

    const fetchtrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=fc64614f73e1b8df6710b999bf635d15&page=${page}`);
    

    setContent(data.results);
    
    };

    useEffect(() => {
         window.scroll(0,0);
         fetchtrending();
         // eslint-disable-next-line
    }, [page]);

    return (
        <div>
            <span className="pagetitle">Trending</span>
            <div className='trending'>
                {
                    content && content.map((c) => (
                        <SingleContent 
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type={c.media_type}
                            vote_average={c.vote_average}
                        />
                    ))
                }
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    );
};

export default Trending;
