import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  numbers = interval(1000);
  subs!: Subscription;
  lastNumber: number = 0;

  @Output() tick: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  start(): void {
    this.subs = this.numbers.subscribe(x => {
      this.tick.emit(this.lastNumber++);
    });

  }

  pause(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

}
