import { useEffect, useReducer, useState } from 'react';
import React from 'react';

function Main(props) {
    const [artCollections, setArtCollections] = useState(props.artCollections);
    let {counter, setCounter} = props;
    const counterReducer = (state, action) => {switch(action.type) {
        case 'NEXT' : return state += action.value 
        case 'PREVIOUS' : return state += action.value 
        default: return state
        }
    }

    function Counter() {
        const [count, dispatch] = useReducer(counterReducer, 0)
    }
    console.log(props.artCollections)
    return (
        <div>
            <img
					className='main-img'
					src={
						props.artCollections &&
						props.artCollections[counter].baseimageurl
					}
				/>
                {/* <button onClick={() => dispatch({type: 'NEXT', value: 1})}></button> */}
        </div>
    );
}

export default Main;