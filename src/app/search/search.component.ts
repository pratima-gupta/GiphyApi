import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
  }

  Search(SearchName :any){
    if(SearchName !== ''){
      this.dataService.searchGif(SearchName);
    }

  }

}
