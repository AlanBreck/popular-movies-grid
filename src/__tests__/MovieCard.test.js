import React from "react";
import MovieCard from "../components/MovieCard";
import { mount } from "enzyme";

test( "MovieCard should properly utilize props.", () => {

	const movie = {
	    "id": 330459,
	    "title": "Rogue One: A Star Wars Story",
	    "backdrop_path": "\/tZjVVIYXACV4IIIhXeIM59ytqwS.jpg"
	};

	const movieCard = mount( <MovieCard movie={movie} /> );

	expect( movieCard.props().movie ).toEqual( movie );
	expect( movieCard.find( ".title" ).text() ).toBe( movie.title );

});
