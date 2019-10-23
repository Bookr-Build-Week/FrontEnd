import React from 'react';
import styled from 'styled-components';

function SavedBooks(props) {
    const {book} = props;

    
    return (
        <Wrapper>
            <Img src={book.url} alt="book" style={{paddingRight: '30px'}}/>
            <div>
                <H3>{book.title}</H3>
                <P>by {book.author}</P>
                <P>{book.publisher} {book.published.slice(0, 4)}</P>
            </div>
        </Wrapper>
    );
}

export default SavedBooks;