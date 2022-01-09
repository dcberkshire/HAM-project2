import './App.css';
import { useState, useEffect } from 'react';
import Main from './component/Main';

function App() {
	const [artCollections, setArtCollections] = useState([]);
	let [counter, setCounter] = useState(0);
	const getArt = (search = '', type = '') => {
		if (search) {
			search = `&q=${search}`;
		}

		let url = `https://api.harvardartmuseums.org/image?apikey=${process.env.REACT_APP_API_KEY}${search}&size=20`;

		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((res) => {
				if (type === 'prev') {
					setArtCollections((art) => [res.records, ...art]);
				} if(type === 'next') {
					setArtCollections((art) => [...art, res.records]);
				}
				console.log(res);
				setArtCollections(res.records);
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
			<Main
				artCollections={artCollections}
				setArtCollections={setArtCollections}
				getArt={getArt}
			/>
		</>
	);
}

export default App;
