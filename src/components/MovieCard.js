import React, { PropTypes } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import styles from "MovieCard.scss";

const MovieCard = ({ movie }) => (

	<ReactCSSTransitionGroup
		transitionName={styles.cardTransition}
		transitionAppear={true}
		transitionAppearTimeout={1000}
		transitionEnter={false}
		transitionLeave={false}>
		<div className={styles.container} key={movie.id} style={{ backgroundImage: `url( https://image.tmdb.org/t/p/w780${movie.backdrop_path} )` }}>
			<div className={styles.details}>
				<h3 className={styles.title}>{movie.title}</h3>
			</div>
		</div>
	</ReactCSSTransitionGroup>

);

export default MovieCard;
