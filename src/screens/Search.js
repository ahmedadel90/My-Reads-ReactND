import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { search } from '../BooksAPI';
import Book from "../components/Book";
import { getAll } from "../BooksAPI";


export default class Search extends Component {
    constructor(props) {
        super();
        this.state = {
            query: "",
            books: []
        }
    }

    async componentDidMount() {
         {
            const books = await getAll();
            this.props.addBooks(books);

        } 
    }

    handleChange = async e => {
         {

            const query = e.target.value;
            this.setState({ query });

            if (query.trim()) {
                
                const results = await search(query);
                if (results.error) {
                    this.setState({ books: [] })
                } else {
                    this.setState({ books: results })
                }
            } else {
                this.setState({ books: [] });
            }
        } 
    }

    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
                    <Link className="close-search" to={"/"}>
                        Close
                    </Link>
                <div className="search-books-input-wrapper">

                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={this.handleChange}
                            value={this.state.query}
                        />

                </div>
            </div>
            <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.length > 0 &&
                            this.state.books.map(book => {
                            const findShelf = this.props.books.find(
                                searchBook => searchBook.id === book.id
                            );

                            if (findShelf) {
                                book.shelf = findShelf.shelf;
                            } else {
                                book.shelf = "none";
                            }

                            return (
                                <Book
                                    key={book.id}
                                    {...book}
                                    updateBook={this.props.updateBook}
                                />
                            );
                            })}
                        {this.state.books.length === 0 && (
                            <h1 style={{ textAlign: "center"}}> No Results </h1>
                        )}
                    </ol>
            </div>
            </div>
        )
    }
}

