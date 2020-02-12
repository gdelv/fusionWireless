import React from 'react';
import './App.css';
import Nav from './shared/Nav'
import Footer from './shared/Footer'
class App extends React.Component {
  state = {

  }

  render () {
    return(
      <>
      <header>
  {/* NAV */}
  <Nav/>
      </header>
      <main>
        {/* ROUTES */}
      </main>
  
      <footer>
        <Footer/>
      </footer>
  
      </>
    )
  }
}


export default App;
