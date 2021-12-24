import React, { Component } from 'react';
export const MyContext = React.createContext();

export default class index extends Component {
    constructor() {
        super();
        this.state = {
            books: [],
            currentlyReading: [],
            wantToRead: [],
            read: [],
            addBooks: books => {
                const currentlyReading = books.filter(bookZ => bookZ.shelf === "currentlyReading");
                const read = books.filter(bookZ => bookZ.shelf === "read");
                const wantToRead = books.filter(bookZ => bookZ.shelf === "wantToRead");
                this.setState({ books, currentlyReading, read, wantToRead });
            },
            updateBook: (book, newShelf, allShelfs) => {
                const updatedBooks = this.state.books.map(BOOKZ => {
                    const findID = allShelfs[newShelf].find(
                        bookID => bookID === BOOKZ.id);
                    if (findID) {
                        BOOKZ.shelf = newShelf;
                    } return BOOKZ;
                });
                this.state.addBooks(updatedBooks);
            }
        };
    }

    render() {
        return (
            <MyContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}