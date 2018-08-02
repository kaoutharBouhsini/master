import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";

export class Globals {
    
    public static url: string = 'http://localhost:8080';
    static token : string;
    
    static  httpOptions = {
        headers: new HttpHeaders({'Authorization': localStorage.getItem('token')})
      };

    public static handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.message}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    };
}