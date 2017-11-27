import { Component, OnInit } from '@angular/core';
import {Globals} from "../globals/globals";
@Component({
  selector: 'app-search-voices',
  templateUrl: './search-voices.component.html',
  styleUrls: ['./search-voices.component.scss'],
  providers: [Globals]
})
export class SearchVoicesComponent implements OnInit {

  constructor() { }

  searchInputTerm(e){
    console.log("searched", e);
  }

  ngOnInit() {
  }

}
