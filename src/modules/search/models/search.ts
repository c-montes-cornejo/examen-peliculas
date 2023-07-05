import { Movie } from "../../movies/models/movie";

export interface Search {
    Response: boolean;
    Search: Array<Movie>;
    totalResults: number;
}