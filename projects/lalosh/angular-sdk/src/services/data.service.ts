import { Injectable } from '@angular/core';
import { SearchResponse } from '@lableb/javascript-sdk/dist/types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  public searchResults: SearchResponse | null = null;
  public searchResultsSubject: BehaviorSubject<Partial<SearchResponse>> = new BehaviorSubject({});

  setSearchResults(results: SearchResponse) {
    this.searchResults = results;
    this.searchResultsSubject.next(results);
  }
}
