import { Component, OnInit, ViewChild } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AdditifService } from 'src/app/@services/additif.service';

@Component({
  selector: 'app-liste-page',
  templateUrl: './liste-page.component.html', 
  styleUrls: ['./liste-page.component.scss']
})
export class ListePageComponent implements OnInit {

  max = 10;
  min = 0;

  post$:Observable<any[]>;

  constructor(
    private _api : AdditifService
  ) { }

  async loadData(event) {
    this.max = this.max + 10;
    event.target.complete();
  }

  ngOnInit(): void {

    this.post$ = this._api.getAllpost();

    
  }

  filterBy($event){
    const {detail:{value=null} ={}} = $event;
    
    this.post$ = this._api.getAllpost().pipe(
      map(posts =>{
        if( value === null) return posts;
        return posts.filter(i=> i.level === value)
      })
    );
  }
}
