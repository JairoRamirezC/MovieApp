import axios from 'axios';

const API_KEY = '6041ddad7c7061383564c2ad2804d69e';
// const API_KEY = process.env.TMDB_API_KEY;

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

const callApiGet = async(url:string) => {
  const response = await instance({
    method: 'GET',
    url
  })
  return response;
}

// const callApiPost = async(url:string, data: string[]) => {
//   const response = await instance({
//     method: 'POST',
//     url,
//     data
//   });
//   return response;
// }

// const callApiPut = async(url:string, data: string[]) => {
//   const response = await instance({
//     method: 'PUT',
//     url,
//     data
//   });
//   return response;
// }

// const callApiDelete = async(url:string, data: string[]) => {
//   const response = await instance({
//     method: 'DELETE',
//     url,
//     data
//   });
//   return response;
// }

const APIMoviesApp = {
  getSearchMovies(inputSearchValue:string){
    return callApiGet(`search/movie?query=${inputSearchValue}&api_key=${API_KEY}`);
  },

  getMostViewed(){
    return callApiGet(`movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
  },

  getMovieById(id:number){
    return callApiGet(`movie/${id}?api_key=${API_KEY}&language=en-US&page=1`);
  }
}

export default APIMoviesApp;