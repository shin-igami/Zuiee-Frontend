import React from "react";
import Banner from "../sections/banner";
// import WorkFlow from "../sections/workflow";
// import Package from "../sections/package";
import TeamSection from "../sections/team-section";
import BlogSection from "../sections/blog-section";
import Header from "../components/layout/Header";

export default function IndexPage() {
	return (
		<div>
			<Header navPosition="right" className="reveal-from-bottom" link="/" btnText="Logout" />

			<Banner />

			{/* <WorkFlow />  have to edit css */}
			{/* <Package /> have to edit componnent */}
			<TeamSection />

			<BlogSection />
		</div>
	);
}
