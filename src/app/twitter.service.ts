import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = `http://localhost:3000`;

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(private http: HttpClient) {
  }
  getTweets(): Observable<any> {
    return this.http.get(`${API_URL}/getTweets`);
  }
}
