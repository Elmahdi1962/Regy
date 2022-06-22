import React from 'react';
import Tables from './features/tables/Tables';
import Rows from './features/rows/Rows';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Regy</h1>
      </header>
      <main>
        <Tables/>
        <Rows/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
