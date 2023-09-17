import axios from 'axios';

// GET all invoices

export const getAllMovies=(callback)=>{
    const request=axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key= 7b040d4e583e29d961323293c6ccf9d1');
    request.then((response)=>{
        const data=response.data
        callback(data)
        console.log(data)
    })
}
