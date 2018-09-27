import axios from "axios";
import { key } from "../config";
import { errorBasic } from "../views/error";

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res =await axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${this.query}`);
            this.result = res.data.results;
        } catch(error) {
            errorBasic();
        }
    };
};