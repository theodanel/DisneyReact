import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.js'
import App from "./routes/App"
import MovieDetail from './routes/MovieDetail.js'
import StudioDetail from './routes/StudioDetail.js'


const Root = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/movie/:id" component={MovieDetail} />
            <Route path="/company/:name" component={StudioDetail} />
            {/*Si aucune route ne correspond à ce qui est spécifié dans l'url, on affiche le composant NotFound */}
      
        </Switch>
    </BrowserRouter>
  )
}

export default Root