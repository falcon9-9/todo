import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
import Todo from './components/Todo'
import TodoDetail from './components/TodoDetail'
import Login from './components/Login'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/todo" component={Todo} />
                    <Route exact path="/login" component={Login} />
                    <Route path="/todo/:id" component={TodoDetail} />
                </div>
            </Router>
        )
    }
}

export default App
