import React from 'react';
import FeaturedMovie from '@/components/featured-movie';

function MovieContainer({ movie }) {
    return (
        <FeaturedMovie
            movie={movie}
            isCompact={false}
        />
    );
}

export default MovieContainer;