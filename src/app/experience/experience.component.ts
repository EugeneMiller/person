import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu, 'ru');

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  position: string = 'front-end developer';
  desc: string = 'Программирование на HTML+CSS+JS';
  startDate: Date  = new Date("2017-05-24");
  endDate: Date = new Date("2018-07-29");
  constructor() { }

  ngOnInit(): void {
  }

}
