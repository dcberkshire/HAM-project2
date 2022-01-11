import { useEffect, useState, useReducer } from 'react';
import React from 'react';
import './style.css'

function Main(props) {
    const [artCollections, setArtCollections] = useState([]);
    const counterReducer = (state, action) => {
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
    console.log(count, artCollections)
    return (
        <div className='main-body'>
            <button className='prev-btn' onClick={() => dispatchEvent({type: 'PREVIOUS'})}>←</button>

            <p className='img-title'>Title - {props.artCollections[count] && props.artCollections[count].title}</p>

            {/* <p className='time-period'>Time Period - {props.artCollections[count] && props.artCollections[count].century}</p> */}

            <img className='main-img' src={props.artCollections[count] && props.artCollections[count].primaryimageurl} />

            <button className='next-btn' onClick={() => dispatchEvent({type: 'NEXT'})}>→</button>

            <p className='description'>Technique Used - {props.artCollections[count] && props.artCollections[count].technique}</p>
        </div>
    );
}

export default Main;