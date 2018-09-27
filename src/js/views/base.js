export const DOMList = {
    mainPosterCollection: document.querySelector('.poster__collection--main'),
    posterCollection: document.querySelector('.poster__collection'),
    popularCategory: document.querySelector('.trending'),
    newCategory: document.querySelector('.news'),
    topCategory: document.querySelector('.top'),
    upcomingCategory: document.querySelector('.upcoming'),
    header: document.querySelector('.header'),
    searchInput: document.querySelector('.search'),
    searchBtn: document.querySelector('.search-btn'),
    arrows: document.querySelector('.nav__arrows'),
    ratingStars: document.querySelector('.rating'),
    welcomeBtn: document.querySelector('.welcome__btn')
};

export const strings = {
    loader: 'loader'
};

export const renderLoader = parent => {
  const markup = `
            <div class="${strings.loader}">
                <svg xmlns="http://www.w3.org/2000/svg" width="450" height="450" viewBox="0 0 44 44" stroke="#fff">
                    <g fill="none" fill-rule="evenodd" stroke-width="2">
                        <circle cx="22" cy="22" r="7.89329">
                            <animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/>
                            <animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="22" cy="22" r="19.0473">
                            <animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/>
                            <animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/>
                        </circle>
                    </g>
                </svg>
            </div>
    `;
    parent.insertAdjacentHTML("afterbegin", markup);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${strings.loader}`);
    if(loader) loader.parentElement.removeChild(loader);
};