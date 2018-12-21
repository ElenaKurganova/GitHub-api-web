import {Inject, Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';
import {Repo} from './repo';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'http://localhost:8080/api/repos' ;

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient, @Inject(SESSION_STORAGE) private storage: StorageService) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log error to console
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getRepos (): Observable<Repo[]> {
    const url = `${apiUrl}`;
    return this.http.get<Repo[]>(url)
      .pipe(
        tap(repos => console.log('Fetched all repos')),
        catchError(this.handleError('getRepos', []))
      );
  }

  getRepoByName(name: string): Observable<Repo> {
    const url = `${apiUrl}/${name}`;
    return this.http.get<Repo>(url).pipe(
      tap(_name => console.log(`Fetched repo with name = ${name}`)),
      catchError(this.handleError<Repo>(`getRepo name=${name}`))
    );
  }

}
