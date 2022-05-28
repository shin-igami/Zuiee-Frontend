import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import Card from "../components/elements/Card";
import Header from "../components/layout/Header";

const Home = () => {
	return (
		<>
			<Header navPosition="right" className="reveal-from-bottom" link="/dashboard" btnText="Login" />
			<Hero className="illustration-section-01" />
			<FeaturesTiles />
			<FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
			<Testimonial topDivider />
			<Cta split />
			{/* <img src="http://placeimg.com/640/480/nature" />
			<img src="http://placeimg.com/640/480/nature" /> */}
			{/* https://source.unsplash.com/random/?city,night */}
		</>
	);
};

export default Home;
