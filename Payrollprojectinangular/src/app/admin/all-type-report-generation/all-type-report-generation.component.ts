import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-all-type-report-generation',
  templateUrl: './all-type-report-generation.component.html',
  styleUrls: ['./all-type-report-generation.component.css']
})
export class AllTypeReportGenerationComponent implements OnInit {
  a=10;
  b=20;
  c=30;
  constructor() {
    
   }

  ngOnInit() {

  }
  
  public  pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [this.a,this.b,this.c];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
   }

