import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() navClickEvent = new EventEmitter<string>();
  activeNavSection: string = "ShoppingList";

  constructor() { }

  ngOnInit(): void {
    this.navClickEvent.emit('ShoppingList');
}

  navTo(value: string): void {
    this.activeNavSection = value;
    this.navClickEvent.emit(value);
  }

}
