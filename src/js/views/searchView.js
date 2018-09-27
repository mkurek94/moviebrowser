import { DOMList } from "./base";

export const query = () => DOMList.searchInput.value;

export const clearInput = () => {
    DOMList.searchInput.value = '';
}

