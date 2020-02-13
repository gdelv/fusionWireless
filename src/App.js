import React from 'react';
import './App.css';
import Nav from './shared/Nav'
import Footer from './shared/Footer'
import { Routes } from './routes'
import MapContainer from './components/Map'

class App extends React.Component {
  state = {

  }

  render() {
    return (
      <>
      <header>
      <Nav/>
      </header>
      
      <main>
          {/* <Routes/> */}
          <MapContainer/>
      </main>
      
  
      <footer>
        {/* <Footer/> */}
      </footer>

      </>
    )
  }
}


export default App;
