import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'lableb-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchInput: FormControl = new FormControl('');

  constructor(
    private clientService: ClientService,
    private dataService: DataService,
  ) { }


  ngOnInit(): void {

    this.searchInput.valueChanges
      .subscribe((query) => {

        this.clientService?.client?.search({ query })
          .then(response => {
            this.dataService.setSearchResults(response);
          })
          .catch(error => console.error(error));

      });

  }

}
