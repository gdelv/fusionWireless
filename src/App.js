import React from 'react';
import './App.css';
import Nav from './shared/Nav'
import { Routes } from './routes'

class App extends React.Component {
  state = {

  }

  render() {
    return (
      <>
        <header>
          {/* NAV */}
          <Nav />
        </header>
        
        <main>
          {/* ROUTES */}
          <Routes/>
        </main>

        <footer>
          {/* FOOTER */}
        </footer>

      </>
    )
  }
}


export default App;
