import React from 'react';

const Book = (props) => {

    const noPicture = 'https://image.shutterstock.com/image-vector/vector-no-photos-symbol-sign-260nw-1137761360.jpg'

    const { title, imageLinks, description } = props.item.volumeInfo

    const infomationAboutBook =

        <div className='Book'>

            <h1>{title}</h1>
            <img src={imageLinks === undefined ? noPicture : imageLinks.thumbnail} alt="" />
            <p>{description ? description.substring(0, 250) + '...' : 'Brak opisu.'}</p>
            <hr />

        </div>

    return (
        <>
            {props.value !== '' ? infomationAboutBook : ''}
        </>
    );
}

export default Book;