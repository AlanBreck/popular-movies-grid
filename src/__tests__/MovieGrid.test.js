import React from "react";
import MovieGrid from "../components/MovieGrid";
import { mount } from "enzyme";

test( "MovieGrid should mount with correct props.", () => {

	const movies = [{
	    "id": 328111,
	    "title": "The Secret Life of Pets",
	    "backdrop_path": "\/lubzBMQLLmG88CLQ4F3TxZr2Q7N.jpg",
	}, {
	    "id": 277834,
	    "title": "Moana",
	    "backdrop_path": "\/1qGzqGUd1pa05aqYXGSbLkiBlLB.jpg",
	}, {
	    "id": 274870,
	    "title": "Passengers",
	    "backdrop_path": "\/5EW4TR3fWEqpKsWysNcBMtz9Sgp.jpg",
	}, {
	    "id": 127380,
	    "title": "Finding Dory",
	    "backdrop_path": "\/iWRKYHTFlsrxQtfQqFOQyceL83P.jpg",
	}, {
	    "id": 297761,
	    "title": "Suicide Squad",
	    "backdrop_path": "\/34dxtTxMHGKw1njHpTjDqR8UBHd.jpg",
	}]

	const movieGrid = mount( <MovieGrid movies={movies} /> );

	expect( movieGrid.children().length ).toBe( 5 );

});
