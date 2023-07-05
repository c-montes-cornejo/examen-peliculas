import { Ratings } from "./ratings";

export interface Movie {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;

    Rated?: string;
    Released?: string;
    Runtime?: string;
    Genre?: string;
    Director?: string;
    Writer?: string;
    Actors?: string;
    Plot?: string;
    Language?: string;
    Country?: string;
    Awards?: string;
    Ratings?: Array<Ratings>;
    Metascore?: string;
    imdbRating?: string;
    imdbVotes?: string;
    DVD?: string;
    BoxOffice?: string;
    Production?: string;
    Website?: string;
}