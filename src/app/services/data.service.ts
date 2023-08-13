import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CurrencyOutput } from '../model/currency.output';
 
@Injectable()
export class DataService {
 
  private dataSource = new BehaviorSubject(typeof CurrencyOutput);
  public currentData = this.dataSource.asObservable();
 
  constructor() { }
 
  changeData(value: any) {
    this.dataSource.next(value);
  }
 
}