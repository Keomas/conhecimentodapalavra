import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import { Observable }  from 'rxjs/Observable';
import  { of }         from 'rxjs/observable/of';  
import { catchError, map, tap, filter } from 'rxjs/operators';


import {Citation}     from './citation';
import {exemplo }     from './mock-citation';


function main(element, index, array) { 
  return (element.id < 5); 
}
function main2(element:Citation[], index) { 
   
}  
@Injectable()

export class CitationsService {
  
  private citationUrl_2='https://teste-b4812.firebaseio.com/Citations';
  private citationUrlScope_2='https://teste-b4812.firebaseio.com/Citations';
  
  private citationUrl='https://teste-b4812.firebaseio.com/Citations.json';
  private citationUrlScope='https://teste-b4812.firebaseio.com/Citations';
  constructor(private http:HttpClient) { }
  
 /* getMain():Promise<Citation[]>{
    return Promise.resolve(exemplo.filter(main));
  }
*/
  //
 
  //Proxima alteracao
  getCitationsMiddle_2(idCitation:String):Observable<Citation[]>{
    
    return this.http.get<Citation[]>(this.citationUrl_2+idCitation). pipe(
     
      catchError(this.handleError('getCitations', []))

    );
  }

  getCitationsMiddle():Observable<Citation[]>{
    return this.http.get<Citation[]>(this.citationUrl). pipe(
     
      catchError(this.handleError('getCitations', []))

    );
  }

  

  //http

  postEmail(message:String,remetente:String,nome:String):Observable<Object>{
    let url='https://us-central1-teste-b4812.cloudfunctions.net/enviarEmail';
    let body = {
    assunto: 'Contato-Conhecimento da Palavra',
    dest: 'keomas.santos@dcomp.ufs.br',
    msg: nome+'\n'+message+'\n'+remetente,
  }
    
    return this.http.post(url,body,{
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
    }).pipe(
      catchError(this.handleError('PostEmail', []))
    );

  }
////////////////////////////////////////////////////////////////
  //Prox alter
getCitations_2(idCitation:String):Observable<Citation[]>{
  return this.http.get<Citation[]>(this.citationUrl_2+idCitation).pipe(
    
    catchError(this.handleError('getCitations', []))
  );

}


getCitations():Observable<Citation[]>{
    return this.http.get<Citation[]>(this.citationUrl).pipe(
      
      catchError(this.handleError('getCitations', []))
    );

  }


  //////////////////////////////////////////////////////////
  //Prox alter
  
  getCitationById_2(id:Number,idCitation:String):Observable<Citation>{
    var url =`${this.citationUrlScope_2+idCitation}/${id+'.json'}`;
    return this.http.get<Citation>(url).pipe(
      catchError(this.handleError<Citation>(`getCitation id=${id}`))
    );
  }

  
  getCitationById(id:Number):Observable<Citation>{
    var url =`${this.citationUrlScope}/${id+'.json'}`;
    return this.http.get<Citation>(url).pipe(
      catchError(this.handleError<Citation>(`getCitation id=${id}`))
    );
  }

 ///
  searchHeroes(term: string): Observable<Citation[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Citation[]>(`${this.citationUrl}/?name=${term}`).pipe(
      
      catchError(this.handleError<Citation[]>('searchHeroes', []))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
