import { Component, OnInit } from '@angular/core';

import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  title = 'Lista de Items';
  data: any;
  items: any;
  constructor(private apiservice: ApiService) { }

  async ngOnInit(): Promise<void> {
    this.data = await this.apiservice.getData().subscribe(data => {
      this.items = data.result.items;
    });
  }
}
