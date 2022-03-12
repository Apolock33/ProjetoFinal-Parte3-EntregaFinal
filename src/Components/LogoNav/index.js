import React from 'react';
import './logo.css'

export default function Logo(props) {
    return (
        <div>
            <img className='logo' src={props.logo} alt='logo' />
        </div>
    );
}