import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import fetchMovies from "fetchMovies";
import throttle from "lodash/throttle";
import Loader from "Loader";
import MovieGrid from "MovieGrid";

import styles from "App.scss";

class App extends React.Component {

	constructor () {

		super();

		this.state = {
			movies: [],
			currentPage: 1,
			noMoreData: false,
			isLoading: false,
			error: false,
		}

	}

	componentDidMount () {

		this.setState({ isLoading: true });
		fetchMovies( this.state.currentPage, ( err, movies ) => {
			if ( err ) return this.setState({ error: err, isLoading: false });
			this.setState({
				movies: movies,
				isLoading: false,
				error: false,
			});
		});

		window.addEventListener( "scroll", throttle( this.handleScroll, 300 ).bind( this ) );

	}

	componentWillUnmount () {

		window.removeEventListener( "scroll", throttle( this.handleScroll, 300 ).bind( this ) );

	}

	loadMoreMovies () {

		var { movies, currentPage } = this.state;
		var nextPage = currentPage + 1;

		this.setState({ isLoading: true });
		fetchMovies( nextPage, ( err, newMovies, endReached ) => {
			if ( err ) return this.setState({ error: err, isLoading: false });
			this.setState({
				movies: movies.concat( newMovies ),
				currentPage: nextPage,
				noMoreData: endReached,
				isLoading: false,
				error: false
			});
		});

	}

	handleScroll () {

		var { isLoading, noMoreData, error } = this.state;

		if ( !isLoading && !noMoreData && !error ) {
			var windowHeight = window.innerHeight;
			var movieGridRect = this.refs.movieGridContainer.getBoundingClientRect();

			var windowAndContainerDif = movieGridRect.bottom - windowHeight;

			if ( windowAndContainerDif <= 500 ) this.loadMoreMovies();
		}

	}

	render () {

		var { isLoading, noMoreData, movies, error } = this.state;

		return (

			<div className={styles.container}>
				<header className={styles.siteTitleContainer}>
		            <ReactCSSTransitionGroup
						transitionName={styles.siteTitleTransition}
						transitionAppear={true}
						transitionAppearTimeout={800}
						transitionEnter={false}
						transitionLeave={false}>
						<h1 className={styles.siteTitle}>Popular</h1>
					</ReactCSSTransitionGroup>
		        </header>
				<section ref="movieGridContainer">
					<MovieGrid movies={movies} />
				</section>
				{error && <div className={styles.error}>{error}</div>}
				{isLoading && <Loader />}
				{noMoreData && <div className={styles.message}>~ end of catalogue ~</div>}
			</div>

		);

	}

}

export default App;
