const API_KEY = process.env.API_KEY
//https://api.themoviedb.org/v3/trending/all/week?api_key=dcdb72e8b4228a2e13876f061f6ffdc9&language=en-US
export default {
    fetchTrending: {
        title: 'Trending' ,
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`  
    },
    fetchTopRated: {
        title: 'Top Reated' , 
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US` 
    } , 
    fetchActionMovies: {      
        title: 'Action' , 
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`  
    } , 
    fetchComedyMovies: {
        title: 'Comedy' , 
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`      
    },
    fetchHorroMovies: {
        title: 'Horro' , 
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`  
    } ,
    fetchRomanceMovies: {
        title: 'Romance' , 
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`  
    } ,
    fetchMyStery: {
        title: 'Mystery' , 
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`  
    } ,
    fetchSciFi: {
        title: 'Sci-Fi' , 
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`  
    } ,
    fetchWestren: {
        title: 'Westren' , 
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`  
    } , 
    fetchAnimation: {
        title: 'Animation' , 
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`  
    } , 
    fetchTV: {
        title: 'Tv Movie' , 
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`  
    
    }
}