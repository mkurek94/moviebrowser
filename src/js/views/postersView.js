import { DOMList } from './base';

export const clearResults = () => {
    DOMList.mainPosterCollection.innerHTML = '';
    DOMList.arrows.innerHTML = '';
};

export const category = (option) => {
    if(option === 'popular') {
        DOMList.header.textContent = 'Trending Movies';
        return DOMList.popularCategory.id;
    } else if (option === 'new') {
        DOMList.header.textContent = 'New Movies';
        return DOMList.newCategory.id;
    } else if (option === 'top') {
        DOMList.header.textContent = "Top Rated Movies";
        return DOMList.topCategory.id;
    } else if (option === 'upcoming') {
        DOMList.header.textContent = "Upcoming Movies";
        return DOMList.upcomingCategory.id;
    }
};



export const renderPosters = movie => {
    const markup = `
        <div class="item">
            <a href="#${movie.id}"><div class="poster" id=${movie.id}>
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="${movie.id}" alt="${movie.title}">
            </div></a>
            <a href=#${movie.id}><h2>${movie.title}</h2></a>
            <div class="info">
                <span>${movie.release_date}</span>
                <span class="rating">${movie.vote_average}<i class="fas fa-star"></i></span>
            </div>
        </div>
    `;
    DOMList.mainPosterCollection.insertAdjacentHTML("beforeend", markup);
};

const createBtn = (page, available) => `
        <i class="fas fa-chevron-circle-${available === 'prev' ? 'left' : 'right'}" data-goto=${available === 'prev' ? page - 1 : page + 1}></i>
    `;

const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);
    let button;
    if(page === 1 && pages > 1) {
        // Next page available
        button = createBtn(page, 'next');
    } else if(page < pages) {
        // Both pages available
        button = `
        ${createBtn(page, "prev")}
        ${createBtn(page, "next")}
        `;
    } else if(page === pages && pages > 1) {
        // Previous page available
        button = createBtn(page, "prev");
    }

    DOMList.arrows.insertAdjacentHTML("afterbegin", button);
};


export const renderResults = (movies, page = 1, resPerPage = 10) => {
    const width = window.outerWidth;
    const height = window.outerHeight;
    if (width < 703) {
        resPerPage = 2;
    } else if (width < 1010) {
        resPerPage = 4;
    } else if (width < 1347) {
        resPerPage = 6;
    } else if (width < 1730) {
        resPerPage = 8;
    } else if (width > 2062) {
        resPerPage = 12;
    }

    if(height < 925) {
        resPerPage = resPerPage / 2;
    }
    // Render poster for current page
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    movies.slice(start, end).forEach(element => renderPosters(element));

    // render pagination buttons
    renderButtons(page, movies.length, resPerPage);
};