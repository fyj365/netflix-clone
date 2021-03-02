const API_KEY ='51af419cd58cd1972e3ac05ed84af9c3';

const requests = {
    getAllTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
    getNowPlayingMovies: `movie/now_playing?api_key=${API_KEY}&language=en-US`,
    getNetflixOriginals: `discover/tv?api_key=${API_KEY}&language=en-US`,
    // getTVShows: `tv/on_the_air/?api_key=${API_KEY}&language=en-US`,
    // getPopularMovies: `movie/popular/?api_key=${API_KEY}&with_networks=213&language=en-US`,
    // getTopRatedMovies: `movie/top_rated/?api_key=${API_KEY}&language=en-US`,
    getTVShows: `trending/all/week?api_key=${API_KEY}&language=en-US`,
    getPopularMovies: `movie/now_playing?api_key=${API_KEY}&language=en-US`,
    getTopRatedMovies: `discover/tv?api_key=${API_KEY}&language=en-US`
}
export default requests;