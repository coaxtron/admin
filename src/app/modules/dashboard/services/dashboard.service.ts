import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable()
export class DashboardService {

private USERS = `${environment.baseUrl}/MEIL/user.php?userlist`;
private GROPUP = `${environment.baseUrl}/MEIL/user.php?grouplist`;
private ORIGAZTION =`${environment.baseUrl}/MEIL/user.php?organisationlist`;


  constructor(
    private http: HttpClient,
  ) { }

    // User List api
    allUserList():Observable<any> {
      return this.http.get<any>(this.USERS)
      .pipe(
        catchError(this.errorHandler)
      )
    }

    checkUSerScreen(id:any):Observable<any> {
      return this.http.get<any>(`${environment.baseUrl}/MEIL/user.php?screenforuserId=${id}`)
      .pipe(
        catchError(this.errorHandler)
      )
    }

    checkModule(id:any):Observable<any> {
      return this.http.get<any>(`${environment.baseUrl}/MEIL/user.php?moduleforuserId=${id}`)
      .pipe(
        catchError(this.errorHandler)
      )
    }

    group():Observable<any> {
      return this.http.get<any>(this.GROPUP)
      .pipe(
        catchError(this.errorHandler)
      )
    }

    origination():Observable<any> {
      return this.http.get<any>(this.ORIGAZTION)
      .pipe(
        catchError(this.errorHandler)
      )
    }


    errorHandler(error: any) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
   }
}
