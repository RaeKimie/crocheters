import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public toggleMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  public onClick():void {
    this.toggleMenu = !this.toggleMenu;
  }

}
