import React, { Component } from 'react'


// eslint-disable-next-line
export default class MovieDetail
 extends Component {

    state = {
        movie: {}
    }

    async getMovie(id) {
       const data = await fetch(`https://elorri.fr/api/disney-plus/movie/${id}`).then(response=> response.json());

       this.setState({
           movie:data
         });

        }
        
    componentDidMount() {
           this.getMovie(this.props.match.params.id);
         }


  render() {
   
    return (
      <div class="movieDetail">

        <div className="imageDetail">
        <img className="imageSize" src={this.state.movie.poster} alt="" />
        </div>
        <div className="movieResume">
            <div class="movieTitle" >{this.state.movie.title}</div>
            <div>Durée : {this.state.movie.duration} minutes</div>
           
           
        </div>
      </div>
    )
  }

  
}