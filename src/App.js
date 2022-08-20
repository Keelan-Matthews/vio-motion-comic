import React, { useEffect, useState } from 'react';
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import { useInView } from "react-intersection-observer"

function App() {
	const [night, setNight] = useState(false)

	const [ref, inView] = useInView({
        threshold: 0.3,
        rootMargin: '500px 0px 0px 0px'
    });

	useEffect(() => {
		setNight(inView)
    }, [inView]);

	return (
		<main className={`${night ? "bg-dark" : ""}`}>
			<div className="container">
				<PageOne />
				<div className='page-gap'></div>
				
				<div ref={ref}>
					<PageTwo />
				</div>
			</div>
		</main>
	);
}

export default App;
