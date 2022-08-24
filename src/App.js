import React, { useEffect, useState } from 'react';
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree';
import PageFour from './components/PageFour';
import { useInView } from "react-intersection-observer"

function App() {
	const [light, setNight] = useState(false)

	const [ref, inView] = useInView({
        threshold: 0.3,
        rootMargin: '500px 0px 0px 0px'
    });

	useEffect(() => {
		setNight(inView)
    }, [inView]);

	return (
		<main className={`${light ? "" : "bg-dark"}`}>
			<div className="container">
				<div ref={ref}>
					<PageOne />
				</div>
				
				<div className='page-gap d-flex justify-content-center align-items-center'>
					<h1 className='display-1 fw-bold'>Later that evening...</h1>
				</div>
				
				<PageTwo />
				<PageThree/>

				<div className='page-gap'/>

				<div className='page-gap d-flex justify-content-center align-items-center'>
					<h1 className='display-3 fw-bold text-white'>The night of the presentation...</h1>
				</div>

				<PageFour />
			</div>
		</main>
	);
}

export default App;
