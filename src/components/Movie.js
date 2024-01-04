
import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'antd'

const Movie = ({id, poster, title, action}) => {
    return ( 
        
        <div>
                <div>
                {title}
                </div>


                <div>
                <Link to ={`/movie/${id}`}>
                    <img class="posterImg" src={poster} alt="" />
                </Link> 
                
                    <Button>Détail du Film</Button>
                
                </div>
        </div>
            
        )
}

export default Movie
