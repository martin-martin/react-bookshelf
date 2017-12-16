import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Bookshelf extends Component {

  state = {
    shelves : [
      {
        title: "Currently Reading",
        books: [
          {
            imageLinks: {
              thumbnail: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
            },
            title: "To Kill a Mockingbird",
            authors:[ "Harper Lee" ]
          },
          {
            imageLinks: {
              thumbnail: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api"
            },
            title: "Harry Potter and the Sorcerer's Stone",
            authors:[ "Joanne K. Rowling", "Harry Potter" ]
          }
        ]
      },
      {
        title: "Want to Read",
        books: [
          {
            imageLinks: {
              thumbnail: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
            },
            title: "1776",
            authors:[ "David McCullough" ]
          },
          {
            imageLinks: {
              thumbnail: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
            },
            title: "Ender's Game",
            authors:[ "Orson Scott Card" ]
          }
        ]
      },
      {
        title: "Read",
        books: [
          {
            imageLinks: {
              thumbnail: "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api"
            },
            title: "The Hobbit",
            authors:[ "J.R.R. Tolkien" ]
          },
          {
            imageLinks: {
              thumbnail: "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api"
            },
            title: "Oh, the Places You'll Go!",
            authors:[ "Seuss" ]
          }
        ]
      }
    ]
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>Bookshelf</h1>
          <div>
          { this.props.books.map((book, x) => (
            <div key={x}>{book.title}</div>
          ))}
          </div>
        </div>
        <div className="list-books-content">
          <div>
          { this.state.shelves.map((shelf, i) => (
            <div className="bookshelf" key={i}>
              <h2 className="bookshelf-title">{shelf.title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  { shelf.books.map((book, j) => (
                    <li key={j}>
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
                        {book.authors.map((author, k) => (
                          <div className="book-authors" key={k}>{author}</div>
                        ))}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
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
