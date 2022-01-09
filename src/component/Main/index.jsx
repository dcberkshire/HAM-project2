import { useEffect, useState, useReducer } from 'react';
import React from 'react';

function Main(props) {
    const [artCollections, setArtCollections] = useState([]);
    const counterReducer = (state, action) => {
        console.log(state, action)
        switch(action.type) {
            case 'NEXT' :
                if (state === props.artCollections && props.artCollections.length - 2){
                    props.getArt('', 'next')
                } 
                console.log('hit next')
                return state += 1
            case 'PREVIOUS' : 
                if (state !== 0) {
                   return state -= 1
                }
                return state;
            case 'INIT' :
                console.log(props, 'init')
                if(props.artCollections && props.artCollections.length) {
                    return Math.floor(props.artCollections.length / 2)
                }
                return state;
            default:
                return state
        }
    }

    const [count, dispatchEvent] = useReducer(counterReducer, 0);
    useEffect(() => {
        dispatchEvent({type: 'INIT'})
    }, [])

    useEffect(() => {
        setArtCollections(props.artCollections)
    }, [props.artCollections])
    console.log(props, )
    console.log(count, artCollections)
    return (
        <div>
            <button onClick={() => dispatchEvent({type: 'PREVIOUS'})}>←</button>
            <img
					className='main-img'
					src={
						props.artCollections[count] &&
						props.artCollections[count].baseimageurl
					}
				/>
                <button onClick={() => dispatchEvent({type: 'NEXT'})}>→</button>
        </div>
    );
}

export default Main;