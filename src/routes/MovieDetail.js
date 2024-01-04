import React, { Component } from 'react'


// eslint-disable-next-line
export default class 
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
      <div>
        <h1>Affichage du détail du film {this.props.match.params.id}</h1>
        <ul>
            <li>Nom : {this.state.member.title}</li>
           
        </ul>
      </div>
    )
  }

  
}