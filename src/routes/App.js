import { Component } from "react";
import Movie from "../components/Movie.js";
import Studio from "../components/Studios.js";
import './App.css';

export default class App extends Component {
  
  
    state = {
     
      movies:[],
    };
  
   
    async getMovies() {
      
      const data = await fetch("https://elorri.fr/api/disney-plus/movies").then(response=> response.json());
      
      const limitedMovies = data.slice(0, 6);

     
      this.setState({
        movies:data,
        movies: limitedMovies
      });
    }
  // La méthode componentDidMount est appelée automatiquement lors de la création du composant App après le premier rendu
    componentDidMount() {
      this.getMovies();
    }
  

  
    render() {  

      const listmovies = this.state.movies.map((movies, index) => {
        return (
          //la () => avant permet de ne pas exécuter le onclick de suite
          //<li onClick={() => alert(`Coucou ${member.name} !`)}>{member.name}</li>
          <Movie title={movies.title} key={movies.id} poster={movies.poster} id={movies.id} />
        )
      });

      

      return (

        <div className="container">


        <Studio />

          <h1>NOUVEAUTES</h1>
          
          <div class="posterList">
            {listmovies}
          </div>
        </div>
      )
    }
  
}


