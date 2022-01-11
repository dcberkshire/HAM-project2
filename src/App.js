import './App.css';
import { useState, useEffect } from 'react';
import Main from './component/Main';
import Header from './component/Header';

function App() {
	const [artCollections, setArtCollections] = useState([]);
	let [counter, setCounter] = useState(0);
	const getArt = async (search = '', type = '') => {
		let q = '';
		if (search) {
			q = `?q=${search}&`;
		}
		let url = `https://api.harvardartmuseums.org/object?${q}apikey=${process.env.REACT_APP_API_KEY}&size=20&hasimage=1&q=imagepermissionlevel:0&page=${counter}`;

		const getCollection = fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((res) => {
				if (type === 'prev' || search) {
					setArtCollections((art) => [...res.records, ...art]);
				} else if (type === 'next') {
					setArtCollections((art) => [...art, ...res.records]);
				} else {
					setArtCollections(res.records);
				}
				return true;
			})
			.catch((error) => false);
		setCounter(counter + 1);
		return getCollection;
	};

	useEffect(() => {
		getArt();
	}, []);

	return (
		<div className='wrapper-app'>
			<header>
				<Header getArt={getArt} />
			</header>
			<main>
				<Main
					artCollections={artCollections}
					setArtCollections={setArtCollections}
					getArt={getArt}
				/>
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
