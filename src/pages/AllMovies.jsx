import React, { useEffect, useState } from 'react';
import { getMovies } from '../components/homeComponenets/movieApI';
import Movie from '../components/Movie';


const AllMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getMovies();
                setMovies(data);
            } catch (error) {
                console.error("Error fetching featured movies:", error);
            }
        }
        fetchData();

    }, []);

    return (
        <div className='px-4 xl:px-12 mx-auto pt-15 pb-25'>
            <h1 className='border-l-6 border-[#f97316] pl-3 text-4xl  font-bold mb-8'>All Movies <span className='text-[#f97316]'>({movies.length})</span></h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
                {
                    movies.map(movie => <Movie key={movie._id} movie={movie}></Movie>)
                }
            </div>
        </div>
    );
};

export default AllMovies;