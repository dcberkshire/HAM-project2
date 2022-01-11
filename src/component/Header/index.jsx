import React from 'react';
import './style.css'

function Header(props) {
    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='wrapper-header'>
            <h1 className='header-title'>HAM VIEWER</h1>
            <form onSubmit={onSubmit}>
                <input className='search-bar' type="text" />
            </form>
        </div>
    );
}

export default Header;