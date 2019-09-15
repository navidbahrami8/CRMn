import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu1d',
  templateUrl: './menu1d.component.html',
  styleUrls: ['./menu1d.component.css']
})
export class Menu1dComponent implements OnInit {
  panelOpenState = false;
  opened: false ;
  constructor() { }

  ngOnInit() {
  }

}
