import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-voices',
  templateUrl: './search-voices.component.html',
  styleUrls: ['./search-voices.component.scss']
})
export class SearchVoicesComponent implements OnInit {

  constructor() { }
  searchInputTerm(e){
    console.log("searched", e);
  }
  ngOnInit() {
  }

}
