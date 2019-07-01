import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-pjpk',
  templateUrl: './pjpk.component.html',
  styleUrls: ['./pjpk.component.css']
})
export class PjpkComponent implements OnInit {

  public data = [];
  public index = 0;

  constructor(private _service: AppService) { }

  ngOnInit() {
    this._service.getPjpkData()
      .subscribe(data => this.data = data);
  }

  changeIndex(i:number) {
    this.index = i;
    console.log(this.index);
  }

}
