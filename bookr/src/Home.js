import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import axiosWithAuth from './axiosWithAuth'
import TextBookList from './components/Dashboard/TextBookList';
import TextBookPage from './components/Dashboard/TextBookPage';
import UserPage from './components/user/UserPage';
import TextBookPage from './components/main/TextBookPage';
import CategoryPage from './components/main/CategoryPage';
import { UserContext } from './components/contexts/UserContext';

export default function Home() {
    const id = localStorage.getItem('reviewer')
    const [ user, setUser] = useState({first_name: ''}) 
    // console.log(id);
    useEffect( () => {
        axiosWithAuth()
        .get(`https://bookr-bw.herokuapp.com/api/users/${id}`)
        .then(res => {
            setUser(res.data)
        })
        .catch(error => {
            console.log('User .get', error)
        })
    }, [id])
    return (
        
        <div>
            <UserContext.Provider value={user}>
                <Switch>
                    <Route path='/user' component={User} />
                    <Route path='/mybooks' component={UserPage} />
                    <Route path='/:id/addreview' exact render={props => 
                        <div>
                        {/* <AddReview {...props} /> */}
                        </div>
                    }/>
                    <Route path='/books/:category' render={props => 
                    <div>
                        <TextBookList {...props} />
                        </div>
                        } 
                    
                    />
                    <Route path='/:id' exact render={props => 
                            <div>
                            <TextBookPage {...props} />
                            </div>
                    }/>
                    <Route path='/' exact render={() => 
                        <div>
                        <CategoryPage />
                        </div>
                    } />
                    
                </Switch>
            </UserContext.Provider>
        </div>
)
}