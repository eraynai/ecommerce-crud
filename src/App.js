import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemList from './components/items-list-component'
import EditList from './components/edit-list-component'
import CreateTodo from './components/create-todo-component/create-todo-component'
import logo from './images/elli_logo_2.png'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <a
              className='navbar-brand'
              href='https://elliraynai.com'
              target='_blank'
              rel='noreferrer'
            >
              <img src={logo} width='30' alt='logo' />
            </a>
            <Link to='/' className='navbar-brand'>
              E-Commerce Backend CRUD App
            </Link>
            <div>
              <ul className='navbar-nav mr-auto'>
                <li className='navbar-item'>
                  <Link to='/' className='nav-link'>
                    All Items
                  </Link>
                </li>
                <li className='navbar-item'>
                  <Link to='/create' className='nav-link'>
                    Create Item
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route exact path='/' component={ItemList} />
          <Route path='/edit/:id' component={EditList} />
          <Route path='/create' component={CreateTodo} />
        </div>
      </Router>
    )
  }
}

export default App
