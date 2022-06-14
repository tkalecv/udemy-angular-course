import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapsed = true;
  @Output() showRecipe = new EventEmitter<boolean>();

  onShowHideRecipe(value: boolean) {
    this.showRecipe.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
