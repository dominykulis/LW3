import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: [ './car-search.component.css' ]
})
export class CarSearchComponent implements OnInit {
  cars$!: Observable<Car[]>;
  private searchTerms = new Subject<string>();

  constructor(private carService: CarService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.cars$ = this.searchTerms.pipe(

      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.carService.searchCars(term)),
    );
  }
}
