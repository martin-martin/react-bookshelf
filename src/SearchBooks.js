import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import throttle from 'lodash.throttle'

class SearchBooks extends Component {

  state = {
    query: "",
    books : [
      {
        "title": "The Linux Command Line",
        "subtitle": "A Complete Introduction",
        "authors": [
          "William E. Shotts, Jr."
        ],
        "publisher": "No Starch Press",
        "publishedDate": "2012",
        "description": "You've experienced the shiny",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781593273897"
          },
          {
            "type": "ISBN_10",
            "identifier": "1593273894"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 480,
        "printType": "BOOK",
        "categories": [
          "COMPUTERS"
        ],
        "averageRating": 4,
        "ratingsCount": 2,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.2.2.0.preview.2",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api",
        "canonicalVolumeLink": "https://market.android.com/details?id=book-nggnmAEACAAJ",
        "id": "nggnmAEACAAJ",
        "shelf": "currentlyReading"
      }
    ]
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
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                      <select>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">Goodwill</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  {book.authors.map((author, j) => (
                    <div className="book-authors" key={j}>{author}</div>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
