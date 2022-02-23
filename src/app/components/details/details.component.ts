import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.route.params.subscribe(p => {
          this.productId = parseInt( p['id'] );
      });
  }

  productId:number = 0;

}
