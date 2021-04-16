import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdditifService } from 'src/app/@services/additif.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detail-aditif',
  templateUrl: './detail-aditif.component.html',
  styleUrls: ['./detail-aditif.component.scss']
})
export class DetailAditifComponent implements OnInit {

public id:any;
item$:any
itemDesc$:Observable<any>;
  
constructor(
  private _api: AdditifService,
  private route: ActivatedRoute,
  private router: Router
) {
    
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.item$ = this._api.getById(this.id);
    this.itemDesc$ = this._api.getWikiDesc(this.id);
  }

}
