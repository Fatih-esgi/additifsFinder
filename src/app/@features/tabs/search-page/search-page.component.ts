import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  public searchAditive: string;

  constructor(

    ) { }

  ngOnInit(): void {
  }

  submitAditive(){
    return this.searchAditive;
    console.log(this.searchAditive);
    
  }
}
