import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { CurrencyInput } from "../model/currency.input";
import { CurrencyOutput } from "../model/currency.output";

@Injectable({ providedIn: 'root' })
export class PaperlessService {
  private _currencyUrl = ' http://localhost:7209/api/currency';
  constructor(private _http: HttpClient) {}
  
  convertCurrency(input: CurrencyInput): Observable<CurrencyOutput | undefined>
  {
      return this._http.get<any>(`${this._currencyUrl + '/' + input.date}`);
  }
  
}