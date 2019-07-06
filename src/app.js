import React from 'react';
import Tasks from './tasks.js';
import './app.scss';


function App() {
  return (
    <>
      <header>Task Master</header>
      <main>
        <Tasks />
      </main>
      <footer>&copy; 2019 </footer>
      </>
  );
}


export default App;
