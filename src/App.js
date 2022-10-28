import React, { useEffect, useState } from 'react';
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree';
import PageFour from './components/PageFour';
import { useInView } from "react-intersection-observer"

function App() {
	const [light, setNight] = useState(false)
	const [scroll, setScroll] = useState(false)

	const [ref, inView] = useInView({
		threshold: 0.3,
		rootMargin: '500px 0px 0px 0px'
	});

	const scrollInterval = setInterval(() => {
		setScroll(window.scrollY > 0)
	}, 500)

	useEffect(() => {
		setNight(inView)
		clearInterval(scrollInterval)
	}, [inView]);

	return (
		<main className={`${light ? "" : "bg-dark"}`}>
			<div className="d-flex justify-content-between align-items-center">
				<div className="m-5 p-2 px-3 border-black d-inline-block">
					<a href="https://keelanmatthews.com/projects" className='text-decoration-none text-dark'>Go back</a>
				</div>
				<p className='text-dark fs-1 me-5'>02</p>
			</div>
			<div className='position-absolute d-flex flex-column justify-content-center align-items-center' style={{ right: 0, bottom: 0 }}>
				<p className={`fs-5 scroll-down-text ${scroll ? 'hide' : ''}`}>scroll down</p>
				<div className={`mt-5 scroll-line ${scroll ? 'hide' : ''}`}></div>
			</div>


			<div className="container">
				<div ref={ref}>
					<PageOne />
				</div>

				<div className='page-gap d-flex justify-content-center align-items-center'>
					<h1 className='display-1 fw-bold'>Later that evening...</h1>
				</div>

				<PageTwo />
				<PageThree />

				<div className='page-gap' />

				<div className='page-gap d-flex justify-content-center align-items-center'>
					<h1 className='display-3 fw-bold text-white'>The night of the presentation...</h1>
				</div>

				<PageFour />
			</div>
		</main>
	);
}

export default App;
