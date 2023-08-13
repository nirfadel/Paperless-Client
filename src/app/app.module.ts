import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyFormComponent } from './components/currency-form/currency-form.component';
import { ConverterPageComponent } from './components/converter-page/converter-page/converter-page.component';
import { PaperlessService } from './services/paperless.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { CurrencyChartComponent } from './components/charts/currency-chart/currency-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyFormComponent,
    ConverterPageComponent,
    CurrencyChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PaperlessService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
