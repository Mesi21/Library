import React, { Component } from 'react';
import ListOfBooks from './Components/ListOfBooks';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [{ id: 1, title: 'The Da Vinci Code', category: 'Fiction' },
        { id: 2, title: 'Shogun', category: 'Historical Fiction' },
        { id: 3, title: 'The Way of the Peaceful Warrior', category: 'Fiction, Autobiography' },
        { id: 4, title: 'The A.B.C. Murders ', category: 'Crime Novel' }],
    };
  }

  render() {
    const { books } = this.state;
    // books.map((book) => console.log(book.id))
    // console.log(books.id)
    return (
      <div>
        <ListOfBooks item={books} />
      </div>
    );
  }
}

export default App;
