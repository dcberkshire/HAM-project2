import './App.css';
import { useState, useEffect } from 'react';
import Main from './component/Main';
import Header from './component/Header';

function App() {
	const [artCollections, setArtCollections] = useState([]);
	// let [counter, setCounter] = useState(0);
	const getArt = (search = '', type = '') => {
		if (search) {
			search = `&q=${search}`;
		}

		let url = `https://api.harvardartmuseums.org/object?${search}apikey=${process.env.REACT_APP_API_KEY}&size=20&hasimage=1&q=imagepermissionlevel:0`;

		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((res) => {
				if (type === 'prev') {
					setArtCollections((art) => [res.records, ...art]);
				}
				if (type === 'next') {
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

	return (
		<div className='wrapper-app'>
			<div className='header'>
				<Header />
			</div>
			<div className='main'>
				<Main
					artCollections={artCollections}
					setArtCollections={setArtCollections}
					getArt={getArt}
				/>
			</div>
			<div clssName='footer'></div>
		</div>
	);
}

export default App;
