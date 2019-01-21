import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { SalarySlipStructure } from './salary-slip-structure.model';

@Component({
  selector: 'app-salary-slip-structure',
  templateUrl: './salary-slip-structure.component.html',
  styleUrls: ['./salary-slip-structure.component.css']
})
export class SalarySlipStructureComponent implements OnInit {

  constructor(private _salaryslip:AdminServiceService) { }
  salaryslipstruc = new SalarySlipStructure();
  ngOnInit() {
  }

  downloadfile()
  {
    this._salaryslip.getfile(this.salaryslipstruc).subscribe(result=>{console.log(result)})
  }

}