import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CurrencyInput } from 'src/app/model/currency.input';
import { CurrencyOutput } from 'src/app/model/currency.output';
import { PaperlessService } from 'src/app/services/paperless.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.scss']
})
export class CurrencyFormComponent implements OnInit {
  public currencyInputModel: CurrencyInput | undefined;
  currencyForm: FormGroup =  new FormGroup({
    date: new FormControl(null, [Validators.required, Validators.maxLength(4), Validators.minLength(4), Validators.pattern("^[0-9]*$")]),
  });
  
  constructor(private paperlessService: PaperlessService,
     private dataService: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submitForm() {
    let date = this.currencyForm?.get('date')?.value;
    this.currencyInputModel = new CurrencyInput();
    this.currencyInputModel!.date = date as unknown as string;
    this.paperlessService.convertCurrency(this.currencyInputModel!).subscribe(res=>{
      this.dataService.changeData(res);
    });

    
}
get _date() {
  return this.currencyForm?.get('date');
} 

}
