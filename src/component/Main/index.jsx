import { useEffect } from 'react';
import React from 'react';

function main(props) {
    const {artCollections, setArtCollections} = props;
    let {counter, setCounter} = props;

    return (
        <div>
            <img
					className='main-img'
					src={
						artCollections.records &&
						artCollections.records[counter].baseimageurl
					}
				/>
        </div>
    );
}

export default main;