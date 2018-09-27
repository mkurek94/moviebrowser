import { DOMList } from "./base";

export const renderMovieDetails = movie => {
    const markup = `
    <div class="movie__details" id="${movie.id}">
        <img class="backdrop__img" src="https://image.tmdb.org/t/p/original${movie.backdropImg}"/>
        <div class="movie__details--info">
            <div class="info">
                <h3>Release date:</h3>
                <span>${movie.release}</span>
            </div>
            <div class="info">
                <h3>Genres:</h3>
                <span>${movie.genres}</span>
            </div>
            <div class="info">
                <h3>Oryginal Title</h3>
                <span>${movie.original}</span>
            </div>
            <div class="info">
                <h3>Rating</h3>
                <span class="rating">${renderStars(movie.rating)}</span>
            </div>
        </div>
        <div class="description">
            <span class="title">${movie.title}</span>
            <p>${movie.overview}</p>
        </div>
    </div>
    `;
    DOMList.mainPosterCollection.insertAdjacentHTML("beforeend", markup);
    DOMList.header.textContent = `${movie.title}`;
};

const renderStars = (rating, stars = 10) => {
  const star = `<i class="fas fa-star"></i>`;
  const emptyStar = `<i class="far fa-star"></i>`;
  let ratingStar = '';
  for (let i = 0; i < Math.round(rating); i++) {
      ratingStar += star;
  }
  for(let i = Math.round(rating); i < stars; i++) {
      ratingStar += emptyStar;
  }
  return ratingStar;
};