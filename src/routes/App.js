import { Component } from "react";
import Movie from "../components/Movie.js";
import './App.css';

export default class App extends Component {
  
    state = {
     
      movies:[],
    };
  
   
    async getMovies() {
      
      const data = await fetch("https://elorri.fr/api/disney-plus/movies").then(response=> response.json());
      
      
     
      this.setState({
        movies:data
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
          <Movie title={movies.title} key={movies.id} poster={movies.poster} id={movies.id} action={(e) => this.editMember(e.target.value, index)} />
        )
      });
      return (
        <div className="container">
          <h1>Liste des films</h1>
          
          <div class="posterList">
            {listmovies}
          </div>
        </div>
      )
    }
  
}


