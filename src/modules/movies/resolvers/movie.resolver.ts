import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import { MoviesService } from "../services/movies.service"
import { EMPTY, catchError } from "rxjs"

@Injectable({
    providedIn: 'root'
})
export class MovieResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(
        private moviesService: MoviesService,
    ){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.moviesService.get('c5a8f083', route.params?.["id"]).pipe(
            catchError(()=>{
                return EMPTY
            })
        )
    }
}
