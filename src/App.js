import React, { Component } from 'react';
import ListOfBooks from './Components/ListOfBooks';
import Navbar from './Components/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [{
        id: 1, title: 'The Da Vinci Code', category: 'Fiction', author: 'Dan Brown',
      },
      {
        id: 2, title: 'Shogun', category: 'Historical Fiction', author: 'James Clevell',
      },
      {
        id: 3, title: 'The Way of the Peaceful Warrior', category: 'Fiction, Autobiography', author: 'Dan Millman',
      },
      {
        id: 4, title: 'The A.B.C. Murders ', category: 'Crime Novel', author: 'Agatha Cristie',
      }],
    };
  }

  render() {
    const { books } = this.state;
    return (
      <div id="main-content">
        <Navbar />
        <ListOfBooks item={books} />
      </div>
    );
  }
}

export default App;
