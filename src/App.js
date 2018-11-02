import React, { Component } from 'react'
import PageTemplate from './components/PageTemplate'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

class App extends Component {
  render() {
    return (
      <div>
        <PageTemplate>
          <TodoInput/>
          <TodoList/>
        </PageTemplate>
      </div>
    )
  }
}

export default App