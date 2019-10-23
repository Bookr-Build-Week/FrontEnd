import React from 'react';
import styled from 'styled-components';

function SavedBooks(props) {
    const {book} = props;

    const Wrapper = styled.div`
        display: flex;
        justify-content: center;
    `
    const Img = styled.img`
        width: 250px;
        height: 320px;
        padding: 5px;
    `
    const H3 = styled.h3`
        font-family: Roboto, sans serif;
        font-weight: 700;
        color: #332706;
        font-size: 1.5rem;
        line-height: 40px;
        width: 400px;
    `
    const P = styled.p`
        font-family: Roboto, sans serif;
        font-size: 1rem;
        line-height: 21px;
        color: #332706;
    `
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