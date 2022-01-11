import React, { useState } from 'react';
import './style.css'

function Header(props) {
    const { getArt } = props;
    const [ value, setValue ] = useState('');
    const [error, setError] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()
        const searchArt = await getArt(value.trim());
        if(!searchArt) {
            setError('No Art Found Please try again')
        }
    }

    const onInputChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className='wrapper-header'>
            <h1 className='header-title'>HAM VIEWER</h1>
            <form onSubmit={onSubmit}>
                <input className='search-bar' type="text" name="filter" onChange={onInputChange} />
                <p className='error'>{error}</p>
            </form>
        </div>
    );
}

export default Header;