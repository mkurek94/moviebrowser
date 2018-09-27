import axios from "axios";
import { key } from "../config";
import { errorBasic } from "../views/error";

export default class Poster {
    constructor(category) {
        this.category = category;
    }

    async getResults() {
        try {
            const res = await axios(`https://api.themoviedb.org/3/movie/${this.category}?api_key=${key}`);
            this.result = res.data.results;
            // console.log(this.result);
        } catch (error) {
            errorBasic();
        }
    };
};