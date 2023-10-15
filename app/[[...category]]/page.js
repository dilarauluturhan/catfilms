import React from 'react';
import HomeContainer from '@/containers/home';
import {
    getSingleCategory,
    getCategories,
    getPopularMovies,
    getTopRatedMovies
} from '@/services/movie';

async function HomePage({ params }) {
    let selectedCategory;

    const [
        { results: topRatedMovies },
        { results: popularMovies },
        { genres: categories }
    ] = await Promise.all([
        getTopRatedMovies(),
        getPopularMovies(),
        getCategories()
    ]);

    // optional catch all router olduğu için birden fazla length'i var
    // 0.'yı almak istiyorum
    if (params.category?.length > 0) {
        const { results } = await getSingleCategory(params.category[0]);
        selectedCategory = results;
    };

    return (
        <div>
            <HomeContainer
                topRatedMovies={topRatedMovies}
                popularMovies={popularMovies}
                categories={categories}
                selectedCategory={{
                    id: params.category?.[0] ?? '',
                    movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
                }} />
        </div>
    )
}

export default HomePage;