import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {

  state = {
    books : [
      {
        "title": "The Linux Command Line",
        "subtitle": "A Complete Introduction",
        "authors": [
          "William E. Shotts, Jr."
        ],
        "publisher": "No Starch Press",
        "publishedDate": "2012",
        "description": "You've experienced the shiny, point-and-click surface of your Linux computer\u2014now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning gurus: file navigation, environment configuration, command chaining pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of yore. As you make your way through the book's short, easily-digestible chapters, you'll learn how to: * Create and delete files, directories, and symlinks * Administer your system, including networking, package installation, and process management * Use standard input and output, redirection, and pipelines * Edit files with Vi, the world\u2019s most popular text editor * Write shell scripts to automate common or boring tasks * Slice and dice text files with cut, paste, grep, patch, and sed Once you overcome your initial \"shell shock,\" you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's \'Evolution of a SysAdmin\'",
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
          "smallThumbnail": "http:\/\/books.google.com\/books\/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http:\/\/books.google.com\/books\/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http:\/\/books.google.com\/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api",
        "infoLink": "https:\/\/play.google.com\/store\/books\/details?id=nggnmAEACAAJ&source=gbs_api",
        "canonicalVolumeLink": "https:\/\/market.android.com\/details?id=book-nggnmAEACAAJ",
        "id": "nggnmAEACAAJ",
        "shelf": "currentlyReading"
      }
    ]
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
            {this.state.books.map((book) => (
              <li>
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
                  {book.authors.map((author) => (
                    <div className="book-authors">{author}</div>
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
