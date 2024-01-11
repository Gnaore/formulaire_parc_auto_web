import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private apiServicce: ApiService) { }
  formulaires: any;
  images: any;
  urlimg: string = this.apiServicce.urlimg+'uploads/'

  ngOnInit(): void {
    this.allFormulaires();
  }

  allFormulaires() {
    this.apiServicce.AllFormulaire().subscribe(ret => {
      this.formulaires = ret.data
    });
  }

}
