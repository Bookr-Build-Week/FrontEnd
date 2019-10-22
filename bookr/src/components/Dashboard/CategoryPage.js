import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Marketing from '../../images/marketing.png';
import Finance from '../../images/finance.png';
import Mathematics from '../../images/mathematics.png';
import WebDevelopment from '../../images/webdevelopment.png';
import Medicine from '../../images/medicine.png';
import Architecture from '../../images/architecture.png';

const FilterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 20px;
`

const Div = styled.div`
    @media (max-width: 768px) {
        flex-direction: column;

    }
`

function CategoryPage() {
    return (
        <FilterWrap style={{display: 'flex', justifyContent: 'center'}}>
            <FilterBox >
            <h2 style={{color: '#BF9018', fontWeight: '700'}}>Choose your category</h2>
                
                <Div style={{display: 'flex'}}>
                    <div style={{display: 'flex', flexDirection: 'column', paddingRight: '20px'}}>
                        <Link to="/books/Marketing">
                        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(191, 175, 134, 0.3)', padding: '10px',
                                        width: '300px', marginBottom: '10px', background: '#ffffff' }}>
                            <img src={Marketing} alt="binary" />
                            <p style={{padding: '0 10px 0 10px', fontSize: '20px', color: '#107896', fontWeight: '700'}}>Marketing</p>
                        </div>
                        </Link>
                        <Link to="books/Finance">
                        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(191, 175, 134, 0.3)', padding: '10px',
                                        width: '300px', marginBottom: '10px', background: '#ffffff'}}>
                            <img src={Finance} alt="Finance icon" />
                            <p style={{padding: '10px', fontSize: '20px', color: '#107896', fontWeight: '700'}}>Finance</p>
                        </div>
                        </Link>
                        <Link to="books/Mathematics">
                        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(191, 175, 134, 0.3)', padding: '10px',
                                        width: '300px', marginBottom: '10px', background: '#ffffff'}}>
                            <img src={Mathematics} alt="Mathematics icon" />
                            <p style={{padding: '10px', fontSize: '20px', color: '#107896', fontWeight: '700'}}>Mathematics</p>
                        </div>
                        </Link>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <Link to="books/WebDevelopment">
                        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(191, 175, 134, 0.3)', padding: '10px',
                                        width: '300px', marginBottom: '10px', background: '#ffffff'}}>
                            <img src={WebDevelopment} alt="Web Development icon"/>
                            <p style={{padding: '10px', fontSize: '20px', color: '#107896', fontWeight: '700'}}>Web Development</p>
                        </div>
                        </Link>
                        <Link to='books/Medicine'>
                        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(191, 175, 134, 0.3)', padding: '10px',
                                        width: '300px', marginBottom: '10px', background: '#ffffff'}}>
                            <img src={Medicine} alt="Medicine"/>
                            <p style={{padding: '10px', fontSize: '20px', color: '#107896', fontWeight: '700'}}>Medicine</p>
                        </div>
                        </Link>
                        <Link to='books/Architecture'>
                        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(191, 175, 134, 0.3)', padding: '10px',
                                        width: '300px', marginBottom: '10px', background: '#ffffff'}}>
                            <img src={Architecture} alt="Architecture icon" />
                            <p style={{padding: '10px', fontSize: '20px', color: '#107896', fontWeight: '700'}}>Architecture</p>
                        </div>
                        </Link>
                        
                    </div>
                </Div>
            </FilterBox>
        </FilterWrap>
    )
}

export default CategoryPage;

