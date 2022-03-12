import React from 'react';
import './logoFooter.css'

export default function Logo(props) {
    return (
        <div>
            <img className='logoFooter' src={props.logo} alt='logo' />
        </div>
    );
}