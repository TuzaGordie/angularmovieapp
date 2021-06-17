import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { APIResponse, Game } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGameList(orderings: string, search?: string): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('orderings', orderings);

    if (search) {
      params = new HttpParams().set('orderings', orderings).set('search', search);
    }

    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`,{
      params: params,
    });
  }
}
