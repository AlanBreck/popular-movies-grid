import React, { PropTypes } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import MovieCard from "MovieCard";

import styles from "MovieGrid.scss";

class MovieGrid extends React.PureComponent {

	render () {

		const { movies } = this.props;

		return (

			<div className={styles.grid}>
				{movies.map(( movie, i ) => {
					return <MovieCard movie={movie} key={i} />;
				})}
			</div>

		);

	}

}

MovieGrid.propTypes = {
	movies: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		backdrop_path: PropTypes.string,
	})),
};

export default MovieGrid;
