// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header'

import AllTasks from './components/all_tasks'

const Hello = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {

  const Routing = () => {
  return(
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={AllTasks} />
      </Switch>
    </Router>
  )
}

  ReactDOM.render(
    <React.StrictMode>
      <Routing />
    </React.StrictMode>,
    document.body.appendChild(document.createElement('div')),
  )
})
