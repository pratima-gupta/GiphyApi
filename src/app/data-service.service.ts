import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  gif = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient, ) { }

  gifTrendingList(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.searchApiKey}&limit=12`)
    .subscribe((response : any) =>{
      this.gif.next(response.data);
    });
  }

  searchGif(searchName : String){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${searchName}&api_key=${environment.searchApiKey}&limit=12`)
    .subscribe((response : any) =>{
      this.gif.next(response.data);
    });
  }

  getGif(){
    return this.gif.asObservable();
  }
}

