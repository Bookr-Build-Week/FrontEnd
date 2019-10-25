import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import { Link } from 'react-router-dom';
import TextBookCard from '../Dashboard/TextBookCard';
import { Button } from 'semantic-ui-react';

function TextBookList({ handleClick, match, history }) {
    // const category = match.params.category;
    const [textBookList, setTextBookList] = useState([]);
  
    useEffect(() => {
      axiosWithAuth()
      .get('https://bookr-be.herokuapp.com/api/books')
      .then(response => {

        console.log("textBookList", response.data);
        setTextBookList(response.data);
        //Filter response data by category
        // let arr = [];
        // response.data.forEach(book => {
        //   if (book.category === category) {
        //     arr.push(book)
        //     console.log(response);
        //   }
        // })
        // setTextBookList(arr);
      })
      .catch(error => { 
        console.error('Server Error', error);
      });
    }, [])

    return (
       
      <div>
        <h2>Book:</h2>
      </div>
      )
    }
  
    
    export default TextBookList;