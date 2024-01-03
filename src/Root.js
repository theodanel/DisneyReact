import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'
import App from "./routes/App"
import NotFound from './components/NotFound'


const Root = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            
            {/*Si aucune route ne correspond à ce qui est spécifié dans l'url, on affiche le composant NotFound */}
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  )
}

export default Root