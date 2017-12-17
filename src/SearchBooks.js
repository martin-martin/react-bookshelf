import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import throttle from 'lodash.throttle'


class SearchBooks extends Component {

  state = {
    query: "",
    books : this.props.books
  }

  componentDidMount() {
    // sets the focus on the search field
    this.input.focus()

    // limits the API calls to 1 every 1000ms, removes leading whitespace chars
    this.runSearch = throttle(this.runSearch, 1000, {
      leading: false,
      trailing: true
    })

    // sets the query param and runs the Search function if there is a query
    const { query } = this.state
    if (query) {
      this.runSearch(query)
    }
  }

  runSearch = (query) => {
    console.log("yippie yippieh yeah!")
    console.log(query)
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">

            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book, i) => (
              <li key={i}>
                <Book book={book}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
