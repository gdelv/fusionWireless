import React from 'react';
import './App.css';
import Nav from './shared/Nav'
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
        </main>

        <footer>
          {/* FOOTER */}
        </footer>

      </>
    )
  }
}


export default App;
