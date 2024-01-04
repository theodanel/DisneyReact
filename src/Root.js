import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'
import App from "./routes/App"
import NotFound from './components/NotFound'
import Movie from './components/Movie'
import MovieDetail from './routes/MovieDetail'


const Root = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/movie/:id" component={MovieDetail} />
            {/*Si aucune route ne correspond à ce qui est spécifié dans l'url, on affiche le composant NotFound */}
      
        </Switch>
    </BrowserRouter>
  )
}

export default Root