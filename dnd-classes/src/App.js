import React from 'react'

import Header from './components/Header'
import ClassForm from './components/ClassForm'
import ClassList from './components/ClassList'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <ClassForm />
      <ClassList />
    </div>
  )
}

export default App
