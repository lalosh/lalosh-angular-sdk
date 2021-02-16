import { Component, OnInit } from '@angular/core';
import { SearchResponse } from '@lableb/javascript-sdk/dist/types';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'lableb-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public searchResults: BehaviorSubject<Partial<SearchResponse>> = new BehaviorSubject({});

  constructor(
    private dataService: DataService
  ) { 
    this.searchResults = this.dataService.searchResultsSubject;
  }

  ngOnInit(): void {
  }

}
