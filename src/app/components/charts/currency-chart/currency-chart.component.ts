import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DataService } from 'src/app/services/data.service';
Chart.register(...registerables);

@Component({
  selector: 'app-currency-chart',
  templateUrl: './currency-chart.component.html',
  styleUrls: ['./currency-chart.component.scss']
})
export class CurrencyChartComponent implements OnInit {
  currencyModelOutput!: any;
  _GRAPH?: { [key: string]: number } = {};
  myChart: Chart | undefined;
  constructor(private dataService: DataService) { }
  
  ngOnInit(): void {
   
    let labels: String[] = [];
    let _data: number[] = [];
    this.dataService.currentData.subscribe(data => {
      this.currencyModelOutput = data;
      if(this.currencyModelOutput != null && this.currencyModelOutput != "function")
      {
        this._GRAPH = this.currencyModelOutput.GRAPH;
        for (const k in this._GRAPH) {
          labels.push(k);
          _data.push(this._GRAPH[k]);
        }
        this.myChart?.destroy();
        this.myChart = new Chart("currencyChart", {
          type: 'bar',
          data: {
              labels: labels,
              datasets: [{
                  label: 'Currency rates graph',
                  data: _data,
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      });
      }
    });
  }

}
