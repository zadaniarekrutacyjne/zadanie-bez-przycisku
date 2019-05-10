import React from 'react';
import Book from './Book';

const ShowBook = (props) => {


    let hi;

    if (props.items !== '') {

        if (props.value.length > 2) {

            if (props.items !== undefined) {
                hi = props.items.map(item => <Book key={item.id} item={item} value={props.value} />)
            }

        }


    }


    return (
        <div className="father">{hi}</div>
    );
}

export default ShowBook;