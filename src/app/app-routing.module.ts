import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyFormComponent } from './components/currency-form/currency-form.component';
import { ConverterPageComponent } from './components/converter-page/converter-page/converter-page.component';

const routes: Routes = [
  { path: '', component: CurrencyFormComponent },

  { path: 'converter-page', component: ConverterPageComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
