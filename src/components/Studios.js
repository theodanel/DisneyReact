
import React from 'react'
import img1 from '../img/companies/logo-disney.png'
import img2 from '../img/companies/logo-marvel.png'
import img3 from '../img/companies/logo-pixar.png'
import img4 from '../img/companies/logo-starwars.png'
import {Link} from 'react-router-dom'


const Studio = ({name}) => {
return (

    <div className="containerStudio">
      <h1>Liste des Studios</h1>

    <div class="logo">

            <div class="card">
                <Link to ={`/company/${name}`}>
                    <img class="logoSize" src={img1} alt="logo disney" />
                </Link> 
            </div>

            <div class="card">
                <Link to ={`/company/${name}`}>
                    <img class="logoSize" src={img2} alt="logo disney" />
                </Link> 
            </div>

            <div class="card">
                <Link to ={`/company/${name}`}>
                    <img class="logoSize" src={img3} alt="logo disney" />
                </Link> 
            </div>

            <div class="card">
                <Link to ={`/company/${name}`}>
                    <img class="logoSize" src={img4} alt="logo disney" />
                </Link> 
            </div>
    </div>
      
    </div>
  )
}

export default Studio