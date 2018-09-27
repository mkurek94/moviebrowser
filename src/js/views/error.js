import { DOMList } from "./base";

export const noneSearchResults = () => {
    const markup = `
        <div class="error">
            <img src="./img/obikenobi.svg" alt="obikenobi" class="error__icon">
            <span class="error__text">These aren't the Movies you're looking for...</span>
        </div>
    `;
    DOMList.arrows.innerHTML = "";
    DOMList.mainPosterCollection.innerHTML = "";
    DOMList.mainPosterCollection.insertAdjacentHTML('afterbegin', markup);
};

export const errorBasic = () => {
    const markup = `
        <div class="error">
            <img src="./img/kylo.svg" alt="obikenobi" class="error__icon">
            <span class="error__text">Sith happens :(</span>
        </div>
    `;
    DOMList.arrows.innerHTML = "";
    DOMList.mainPosterCollection.innerHTML = "";
    DOMList.mainPosterCollection.insertAdjacentHTML("afterbegin", markup);
};