import React, { Component } from 'react'


// eslint-disable-next-line
export default class 
 extends Component {

    state = {
        studio: []
    }

    async getStudio(name) {
       const data = await fetch(`https://elorri.fr/api/disney-plus/company/${name}`).then(response=> response.json());

       this.setState({
           studio:data
         });

        }
        
    componentDidMount() {
           this.getStudio(this.props.match.params.name);
         }


  render() {
   
    return (
        <h1>Studio</h1>
    )
      
    
  }

  
}