import { useReducer } from 'react';
import React from 'react';
import './style.css'

function Main(props) {

    const counterReducer =  (state, action) => {
        switch(action.type) {
            case 'NEXT' :
                if (Number(state) === Number(props.artCollections.length - 1)){
                    props.getArt('', 'next')
                    return state +=1
                }
                return state += 1
            case 'PREVIOUS' : 
                if (state === 0) {
                    props.getArt('', 'prev')
                   return state += 20
                }
                return state -= 1;
            default:
                return state
        }
    }

    const [count, dispatchEvent] = useReducer(counterReducer, 10);

    return (
        <div className='main-body'>
            <button className='btn btn-prev' onClick={() => dispatchEvent({type: 'PREVIOUS'})}>←</button>
            <div className='art-div'>
                <p className='img-title'>Title - {props.artCollections[count] && props.artCollections[count].title}</p>
    
                <img className='main-img' src={props.artCollections[count] && props.artCollections[count].primaryimageurl} />
                <p className='description'>Technique Used - {props.artCollections[count] && props.artCollections[count].technique}</p>
            </div>

            <button className='btn btn-next' onClick={() => dispatchEvent({type: 'NEXT'})}>→</button>
        </div>
    );
}

export default Main;