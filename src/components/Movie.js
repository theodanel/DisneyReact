
import React from 'react'
import {Link} from 'react-router-dom'

const Movie = ({id, poster, title}) => {
    return ( 
        
        <div>
                <div>
                {title}
                </div>


                <div>
                <Link to ={`/movie/${id}`}>
                    <img class="posterImg" src={poster} alt="" />
                </Link> 
                
                </div>
        </div>
            
        )
}

export default Movie
