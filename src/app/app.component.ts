import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'academind';

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onTick(x: number) : void {
    if (x % 2 == 0) {
      this.evenNumbers.push(x);
      console.log('Even ' + this.evenNumbers);
    } else {
      this.oddNumbers.push(x);
      console.log('Odd ' + this.oddNumbers);
    }
  }

}
