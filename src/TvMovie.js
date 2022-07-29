
const API_KEY = '8f0a4d2f9ab65d0866a04598cd906fdd';
const API_BASE = 'https://api.themoviedb.org/3';



const basiceFetch = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default{
    getHomeList: async () =>{
        return[
            {
                slug: 'originals',
                title: 'Originais da NetFlix',
                items: await basiceFetch(`/discover/tv?with_network=213&language=pt-BRA&api_key=${API_KEY}`)

            },
            {
                slug: 'Trending',
                title: 'Recomendados para você',
                items: await basiceFetch(`/trending/all/week?language=pt-BRA&api_key=${API_KEY}`)

            },
            {
                slug: 'Toprated',
                title: 'Em Alta',
                items: await basiceFetch(`/movie/top_rated?language=pt-BRA&api_key=${API_KEY}`)

            },
            {
                slug: 'Action',
                title: 'Ação',
                items: await basiceFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)

            }, {
                slug: 'Comedy',
                title: 'Comedia',
                items: await basiceFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basiceFetch(`/discover/movie?with_genres=27&language=pt-BRA&api_key=${API_KEY}`)
            },
            {
                slug: 'Romance',
                title: 'Romance',
                items: await basiceFetch(`/discover/movie?with_genres=10749&language=pt-BRA&api_key=${API_KEY}`)

            },
            {
                slug: 'Documentary',
                title: 'Documentarios',
                items: await basiceFetch(`/discover/movie?with_genres=99&language=pt-BRA&api_key=${API_KEY}`)

            }
        ];
    },
    getMovieInfo: async (movieId, type) =>{
        let info = {};
        if(movieId){
            switch(type){
                case 'movie':
                    info = await basiceFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basiceFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;

                default:
                    info = null;
                    break;
            }
        }
        return info;
    }
}