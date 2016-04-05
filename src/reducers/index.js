import { combineReducers } from 'redux';
import BooksReducer from './reducers_books';
import ActiveBook from './reducers_active_books';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
