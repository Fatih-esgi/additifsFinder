import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class AdditifService {

  constructor(
    private _http: HttpClient
  ) { }

  getAllpost():Observable<any[]>{
    return this._http.get<any[]>('./assets/db.json').pipe(
      map((post:any) => post.additives  ))
  }

  getById(id: string): Observable<any> {
    return this._http.get<any[]>('./assets/db.json').pipe(
      map((post:any) => post.additives.find(a=>a.id === id)  ))
    }

  getWikiDesc(id: string): Observable<any> {
    return this._http.get<any>(`https://fr.wikipedia.org/api/rest_v1/page/summary/E${id}`);
  }

}
