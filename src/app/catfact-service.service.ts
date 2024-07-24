import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


interface CatFact {
  fact: string;
  length: number;
}

@Injectable({
  providedIn: 'root'
})


export class CatfactServiceService {
  private url = 'https://catfact.ninja/fact';
  constructor(private http: HttpClient) { 
    
  }
  getCatFact(): Observable<CatFact> {
      return this.http.get<CatFact>(this.url).pipe(
        catchError(error => {
          console.error('Error fetching cat fact:', error);
          return throwError(error);
        })
      );
    }
}
