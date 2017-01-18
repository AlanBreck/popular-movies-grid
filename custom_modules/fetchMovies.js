import request from "superagent";

export default function fetchMovies ( page, callback ) {

	var limit = 20;
	var root = "https://api.themoviedb.org/3";
	var apiKey = "07035d621a52a158b9d7f82b7087fd8d";
	var url = `${root}/movie/popular`;

	request.get( url )
		.query( { page: page, api_key: apiKey } )
		.end(( err, response ) => {

			if ( err ) return callback( response.body.status_message );

			var endReached = response.body.results.length < limit;
			callback( null, response.body.results, endReached );

		});

}
