import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
        return (
            <li
            key = {book.title}
            onClick = { () => this.props.selectBook(book) }
            className = "list-group-item">
            {book.title}
            </li>
        );
      });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Return value will show up as props inside of BookList
  return {
      books: state.books
  };
}

// Return value will be mapped to Props of container
function mapDispatchToProps(dispatch) {
  // Pass selectBook to all the reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);