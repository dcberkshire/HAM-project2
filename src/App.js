import './App.css';
import { useState, useEffect } from 'react';
import Main from './component/Main';

function App() {
	const [artCollections, setArtCollections] = useState({});
	let [counter, setCounter] = useState(0);
	const getArt = (search = '') => {
		if (search) {
			search = `&q=${search}`;
		}

		let url = `https://api.harvardartmuseums.org/image?apikey=${process.env.REACT_APP_API_KEY}${search}`;

		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((res) => {
				setArtCollections(res);
			})
			.catch((error) => console.log('error', error));
	};

	useEffect(() => {
		getArt();
	}, []);

	console.log(artCollections, 'art');
	return (
		<>
			<header className='App-header'>
				<h1></h1>
			</header>
			<Main artCollections={artCollections.records} setArtCollections={setArtCollections} counter={counter} setCounter=
			{setCounter}/>
		</>
	);
}

export default App;
