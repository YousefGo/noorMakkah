import React, { Component } from 'react'
import BookCard from './BookCard';
 class BookShop extends Component {
    render() {
        return (
            <div className="row">
                <BookCard />
                <BookCard />
                <BookCard />

                


            </div>
        )
    }
}

export default BookShop ;
