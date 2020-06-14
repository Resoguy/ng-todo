import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-route',
  templateUrl: './dynamic-route.component.html',
  styleUrls: ['./dynamic-route.component.scss']
})
export class DynamicRouteComponent implements OnInit {
  currentRoute;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.currentRoute = params.get('id')
    })
  }

}
