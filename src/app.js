import React from 'react';
import Tasks from './tasks.js';
import Header from './header.js';
import './app.scss';


function App() {
  return (
    <>
      <Header />
      <main>
        <Tasks />
      </main>
      <footer>&copy; TaskMaster2019 </footer>
      </>
  );
}


export default App;
