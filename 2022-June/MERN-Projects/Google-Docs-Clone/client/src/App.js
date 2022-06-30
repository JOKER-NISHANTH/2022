// rafce

import React from 'react'
import {BrowserRouter as Router , Switch,Route,Redirect} from "react-router-dom"
import TextEditor from './components/TextEditor'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact >
            <Redirect to="/document/1284641546464" />
        </Route>
        <Route path='/document/:id' exact component={TextEditor} />
      </Switch>
    </Router>
  )
}

export default App