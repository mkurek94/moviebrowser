import Poster from './models/Posters';
import * as postersView from './views/postersView';
import * as searchView from './views/searchView';
import * as movieView from './views/movieView';
import { DOMList, renderLoader, clearLoader } from './views/base';
import { noneSearchResults, errorBasic } from "./views/error";
import Search from './models/Search';
import Movie from './models/Movie';

/**
 * Category object
 */
const state = {};

////////////////////
// Poster Controler
///////////////////
const controlPosters = async (option) => {
    // 1) Get category from navbar
    const category = postersView.category(option);

    if(category) {
        // 2) New poster obj and add to state
        state.category = new Poster(category);

        // 3) Prepare UI for results
        postersView.clearResults();
        renderLoader(DOMList.posterCollection);
        // 4) Get the movies
        try{
            await state.category.getResults();

            // 5) Render results on UI
            clearLoader();
            postersView.renderResults(state.category.result);
        } catch(error) {
            errorBasic();
        }
    }
};

/////////////////////
// Search Controller
/////////////////////
const controlSearch = async() => {
    // 1) Get query from search input
    const query = searchView.query();

    if(query) {
        // 2) New poster obj and add to state
        state.category = new Search(query);

        // 3) Prepare UI for results
        postersView.clearResults();
        searchView.clearInput();
        DOMList.header.textContent = `${query} Movies`;

        // 4) Get the results
        try {
            await state.category.getResults();

            // 5) Render results on UI
            postersView.renderResults(state.category.result);
            if (DOMList.mainPosterCollection.textContent == '') {
                noneSearchResults();
            }
        } catch(error) {
            errorBasic();
        }
    }
}

DOMList.searchBtn.addEventListener('click', controlSearch);

window.addEventListener("keypress", e => {
    if (e.keyCode === 13) {
        DOMList.searchBtn.click();
    }
});



/////////////////////
// MOVIE CONTROLLER
////////////////////
const controllerMovie = async () => {
    const id = window.location.hash.replace('#', '');

    if(id){
        state.movie = new Movie(id);

        // Prepare UI for result
        postersView.clearResults();
        DOMList.arrows.innerHTML = '';
        renderLoader(DOMList.posterCollection);

        try {
            await state.movie.getResults();
            movieView.renderMovieDetails(state.movie);
            clearLoader();
        } catch(error) {
            errorBasic();
        }
    }

}

window.addEventListener('hashchange', controllerMovie);

DOMList.welcomeBtn.addEventListener('click', e => {
    controlPosters("popular");
    DOMList.popularCategory.setAttribute("class", "active");
});

DOMList.popularCategory.addEventListener('click', e => {
    controlPosters('popular');
    DOMList.popularCategory.setAttribute('class', 'active');
    DOMList.newCategory.removeAttribute("class", "active");
    DOMList.topCategory.removeAttribute("class", "active");
    DOMList.upcomingCategory.removeAttribute("class", "active");
});

DOMList.newCategory.addEventListener("click", e => {
    controlPosters('new');
    DOMList.newCategory.setAttribute("class", "active");
    DOMList.popularCategory.removeAttribute("class", "active");
    DOMList.upcomingCategory.removeAttribute("class", "active");
    DOMList.topCategory.removeAttribute("class", "active");
});

DOMList.topCategory.addEventListener("click", e => {
    controlPosters('top');
    DOMList.newCategory.removeAttribute("class", "active");
    DOMList.popularCategory.removeAttribute("class", "active");
    DOMList.upcomingCategory.removeAttribute("class", "active");
    DOMList.topCategory.setAttribute('class', 'active');
});

DOMList.upcomingCategory.addEventListener("click", e => {
    controlPosters('upcoming');
    DOMList.newCategory.removeAttribute("class", "active");
    DOMList.popularCategory.removeAttribute("class", "active");
    DOMList.topCategory.removeAttribute("class", "active");
    DOMList.upcomingCategory.setAttribute("class", "active");
});

DOMList.arrows.addEventListener('click', e => {
    const btn = e.target.closest('.fas');
    if(btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        postersView.clearResults();
        postersView.renderResults(state.category.result, goToPage);
    }
});




