import React from 'react';
import { useEffect, useState } from 'react';

import './App.css';

import Loading from './assets/Loading.mp4';

import TvMovies from './TvMovie';
import MoviesRow from './components/MoviesRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

const App = () =>{
  const [movies, setMovies] = useState([]);
  const [FeaturedData, setFeaturedData ] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() =>{
    const loadAll = async () =>{

      //Pegando a Lista dos Fimes
      let list = await TvMovies.getHomeList();
      setMovies(list);

      // Mostrando Destaque do Filme

      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await TvMovies.getMovieInfo(chosen.id, 'tv');
      
      setFeaturedData(chosenInfo);
    }
    loadAll();
  }, [])

  useEffect(() =>{
    const scrollListener = () =>{
      if(window.scrollY > 10){
        setBlackHeader(true);
        
      }else{
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);

    return() =>{
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return(
      <div className='page'>

        <Header black={blackHeader}/>
        
        {FeaturedData && 
          <FeaturedMovie item={FeaturedData}/>
        }
        <section className='lists'>
          {movies.map((item, key) =>(
            <MoviesRow  key={key} title={item.title} items={item.items}/>
          ))}
        </section>
        <footer>
          Desenvolvido Por <a href='https://portifolio-wdenberg.vercel.app/'>Wdenberg Ramos</a> 
        </footer>
        {movies.length <= 0 &&
        
          <div className='loading'>
           <img src='https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif' alt='Carregando'/>
          </div>
        }
      
      </div>
  );
}

export default App;