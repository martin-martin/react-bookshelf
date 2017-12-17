import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'


class Bookshelf extends Component {

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>Bookshelf</h1>
        </div>
        <div className="list-books-content">
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                { this.props.shelves.currentlyReading.map((bookId) => (
                    <li key={bookId}>
                      <Book book={this.props.mappedBooks[bookId]} />
                    </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want To Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                { this.props.shelves.wantToRead.map((bookId) => (
                    <li key={bookId}>
                      <Book book={this.props.mappedBooks[bookId]} />
                    </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                { this.props.shelves.read.map((bookId) => (
                    <li key={bookId}>
                      <Book book={this.props.mappedBooks[bookId]} />
                    </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Bookshelf
