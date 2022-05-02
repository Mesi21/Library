import { createStore, combineReducers } from 'redux';
import booksReducer from './books/books';
import catReducer from './categories/categories';

const reducer = combineReducers({
  booksRed: booksReducer,
  catRed: catReducer,
});

const store = createStore(
  reducer(),
);

export default store;
