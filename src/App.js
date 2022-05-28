import React, { useState, useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
	ReactGA.set({ page });
	ReactGA.pageview(page);
};

const App = () => {
	const childRef = useRef();
	let location = useLocation();

	useEffect(() => {
		const page = location.pathname;
		document.body.classList.add("is-loaded");
		childRef.current.init();
		trackPage(page);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	const [data, setData] = useState([{}]);

	useEffect(() => {
		fetch("/members")
			.then(res => res.json())
			.then(data => {
				setData(data);
				console.log(data);
			});
	}, []); //empty array is passed at last so that this code runs only once
	return (
		// <div>
		// 	{typeof data.members === "undefined" ? (
		// 		<p>Loading</p>
		// 	) : (
		// 		data.members.map((member, i) => <p key={i}>{member}</p>)
		// 	)}
		// </div>
		<ScrollReveal
			ref={childRef}
			children={() => (
				<Switch>
					<AppRoute exact path="/" component={Home} layout={LayoutDefault} />
					<AppRoute exact path="/dashboard" component={Dashboard} layout={LayoutDefault} />
					{/* <AppRoute exact path="/" component={Dashboard} layout={LayoutDefault} /> */}
				</Switch>
			)}
		/>
	);
};

export default App;

{
	/* <div>
			{typeof data.members === "undefined" ? (
				<p>Loading</p>
			) : (
				data.members.map((member, i) => <p key={i}>{member}</p>)
			)}
		</div> */
}

// ACTUAL CODE
// <ScrollReveal
// 	ref={childRef}
// 	children={() => (
// 		<Switch>
// 			<AppRoute exact path="/" component={Home} layout={LayoutDefault} />
// 		</Switch>
// 	)}
// />
