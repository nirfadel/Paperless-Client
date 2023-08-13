import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-converter-page',
  templateUrl: './converter-page.component.html',
  styleUrls: ['./converter-page.component.scss']
})
export class ConverterPageComponent implements OnInit {
  currencyModelOutput!: any;
 
  constructor(private _activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.currentData.subscribe(data => {
      this.currencyModelOutput = data;
    });
  }

  // Order by ascending property value
valueAscOrder = (a: KeyValue<number,number>, b: KeyValue<number,number>): number => {
  return 0;
}

}
