import React from 'react';
import Header from './Header';
import Footer from './Footer';
import GetNotes from './Note';
import Notes from '../notes';

export default App;

function App() {
  return (
    <div>
      <Header />
      {Notes.map(GetNotes)}
      <Footer />
    </div>
  );
}
