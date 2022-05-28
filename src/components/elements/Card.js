import React from "react";

const Card = () => {
	return (
		<>
			{/* <img src={"http://image.tmdb.org/t/p/w185" + item.backdrop_path} />
			<img src={`http://image.tmdb.org/t/p/w185${item.backdrop_path}`} /> */}
			<img src={`http://placeimg.com/640/480/arch?nocache=${Math.random()}`} />
			{/* https://source.unsplash.com/random/?city,night */}
		</>
	);
};

export default Card;
