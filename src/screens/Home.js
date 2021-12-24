import React, { Component } from 'react';
import Shelf from "../components/Shelf";
import Add from "../components/Add";
import { getAll } from "../BooksAPI";

export default class Home extends Component {
    async componentDidMount() {
        {
            const Books = await getAll();
            this.props.addBooks(Books);

        }
    }
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Shelf
                        title="Currently Reading"
                        books={this.props.currentlyReading}
                        updateBook={this.props.updateBook} />
                    <Shelf
                        title="Want To Read"
                        books={this.props.wantToRead}
                        updateBook={this.props.updateBook} />
                    <Shelf
                        title="Read"
                        books={this.props.read}
                        updateBook={this.props.updateBook} />
                </div>
                <Add />
            </div>
        );
    }
}
