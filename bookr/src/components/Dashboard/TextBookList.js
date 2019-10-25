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

    function ClickHandler() {
        history.push('/')
      }

    return (
      
        <div style={{display: 'flex', flexDirection: 'column'}}>
      <Button onClick={ClickHandler} style={{alignSelf: 'flex-start', color: '#0D5813', background: 'transparent', marginLeft: '20px', fontSize: '1.2rem'}}>
                 back to home page
      </Button>
      <div className="grid-view">
        {textBookList.map((book, index) => {
          return <Link to={`/${book.id}`} key={index} ><TextBookCard book={book}/></Link>
        })}
      </div>
    </div>
  );
}
    
 export default TextBookList;