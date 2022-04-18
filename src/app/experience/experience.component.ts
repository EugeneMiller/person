import { Component, Input, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import{job} from '../job'; // импортирую тип данных
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu, 'ru');

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() eItem: job = {
    position: '',
    desc: '',
    startDate: new Date(),
  endDate:new Date()};
  position: string = 'front-end developer';
  desc: string = 'Программирование на HTML+CSS+JS';
  startDate: Date  = new Date("2021-05-24");
  endDate: Date = new Date("2021-07-29");
  isHide : Boolean = false;
  nowDay: Date = new Date();
  constructor() { }
  //показать байндинг
  firmURL = 'https://img.huffingtonpost.com/asset/56e6e7651e000087007040c6.jpeg';
hideDesc=() =>{
  this.isHide = !this.isHide;
}
pastDays(d : Date) : number{

  return (Date.now()-d.getTime())/60/60/24/1000;
}
  ngOnInit(): void {
  }

}
