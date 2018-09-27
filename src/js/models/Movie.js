import axios from "axios";
import { key } from "../config";
import { errorBasic } from "../views/error";

export default class Movie {
    constructor(id) {
        this.id = id;
    };

    async getResults() {
        try{
            const res = await axios(`https://api.themoviedb.org/3/movie/${this.id}?api_key=${key}`);
            this.title = res.data.title;
            this.backdropImg = res.data.backdrop_path;
            this.genres = res.data.genres[0].name;
            this.overview = res.data.overview;
            this.release = res.data.release_date;
            this.original = res.data.original_title;
            this.rating = res.data.vote_average;
        } catch(error) {
            errorBasic();
        }
    }


};