import './App.css';
import { useState, useEffect } from 'react';
import Main from './component/Main';
import Header from './component/Header';
import Modal from './component/Footer/Modal.jsx';
import { AboutButton } from './component/Footer/Button.jsx';

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

	const [show, setShow] = useState(false);

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
			<footer>
				<AboutButton onClick={() => setShow(!show)}>About</AboutButton>
				{show && <Modal />}
			</footer>
		</div>
	);
}

export default App;
