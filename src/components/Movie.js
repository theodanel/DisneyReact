
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
                    <img class="posterImg" src={poster} alt="" />
                    
                <Link to ={`/movie/${id}`}></Link>
                    <Button>Détail du Film</Button>
                
                </div>
        </div>
            
        )
}

export default Movie
