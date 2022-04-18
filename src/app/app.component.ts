import { Component } from '@angular/core';
import{job} from './job'; // импортирую тип данных
import{ITEMS} from './exp-items'; // импортирую сами данные

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //style:{}
})
export class AppComponent {
  title: string = 'Портфолио';
  name: string = 'Иван';
  payment: number = 40;
  age: number = 25;
  ageStr: string = `Возраст: ${this.age}`;
  items: job[] = ITEMS;
  getName():string {
    return this.name;
  }

}
