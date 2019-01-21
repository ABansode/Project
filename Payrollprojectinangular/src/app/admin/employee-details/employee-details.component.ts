import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { AdminServiceService} from '../admin-service.service';
import { Employeeregistration} from '../employee-registration/employee-registration.model';
import {MonthlySalary } from './monthelysalary.model';
import {  ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import * as jspdf from 'jspdf'; 
import 'jspdf-autotable';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @ViewChild(MatSort) matSort:MatSort;//jtable use
  @ViewChild(MatPaginator) paginator:MatPaginator; //jtable use
  @ViewChild('TABLE') table: ElementRef;

  showEmployee:boolean=true;  
     monthlysalarydetails:boolean=false;
     editEmployeeForm:boolean=false;
     employeeregistration =new Employeeregistration();
     editnewemployee;
   // AllEmployee;
   monthlySalary=new MonthlySalary();
   salaryid;
public displayedColumns=['EmployeeId','FirstName','LastName','Address','Mobile No','Department','Designation','Join Date','Action1','Action2','Action3'];
public dataSource=new MatTableDataSource<Employeeregistration>();

constructor(private _Adminservice :AdminServiceService) { }

  ngOnInit() {
    this._Adminservice.getAllEmployee().subscribe(result=>{
      this.dataSource.data=result as Employeeregistration[];
      });
    }

  ngAfterViewInit() : void{
      this.dataSource.sort=this.matSort;
      this.dataSource.paginator=this.paginator;
     }
  
  
  public doFilter=(value:string) =>{
     this.dataSource.filter=value.trim().toLocaleLowerCase();
     }
  
  ganretMonthlySalary(employeeId){
    this.showEmployee=false;
   this.monthlysalarydetails=true;
  this.monthlySalary.monthelySalaryId=employeeId;
  }
  
months=['jan','feb','march','april','may','june','july','aug','sept','oct','nov','dec'];
years=[2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018];
rows=[];
employeeGenrateMontlySalary(){
   this._Adminservice.employeeGenrateMontlySalary(this.monthlySalary).subscribe();
   this.showEmployee=true;
   this.monthlysalarydetails=false;
  }

 
 public captureScreen()  
 {  
  //  let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
   let doc =new jspdf();
   // horizontal line
  // doc.text(75,15, "All Employee Reports");
  // doc.setLineWidth(0.0);
   //doc.line(0, 20, 210, 20);
  // doc.text(3,27, "EId");
  // doc.text(22,27, "First Name");
  // doc.text(53,27, "Last Name");
  // doc.text(85,27, "Mobile No");
  // doc.text(119,27, "Department");
  // doc.text(151,27, "Designation");
  // doc.text(183,27, "Join Date");
  // doc.line(2, 30, 208, 30);
   //doc.setDrawColor(255,0,0); // draw red lines
  // doc.setLineWidth(0.1);
  //  // vertical line
  // doc.line(2, 290, 2, 20);
 //  doc.setLineWidth(0.1);
   //doc.line(20, 290, 20, 20);//First Name
  // //doc.setLineWidth(0.1);
  // doc.line(52, 290, 52, 20);//last Name
  // //doc.setLineWidth(0.1);
  // doc.line(83, 290, 83, 20);//Mobile No
  // doc.line(118, 290, 118, 20);//Department
 //doc.line(150, 290, 150, 20);//Designation
  // doc.line(182, 290, 182, 20);
  // doc.line(208, 290, 208, 20);
  // doc.line(2, 290, 208, 290);
   // doc.setLineWidth(0.1);
  // let specialElementHandlers={
  //'#editor':function(element,renderer){
    //    return true;
      //}
  ///};
  
  let Table =this.table.nativeElement;
  //  let ID =this.ID.nativeElement
  //  let FN =this.FN.nativeElement
  //  let LN =this.LN.nativeElement
  //  let MN =this.MN.nativeElement
  //  let DP =this.DP.nativeElement
  //  let DS =this.DS.nativeElement
  //  let DJ =this.DJ.nativeElement
  //  let cont =this.cont.nativeElement
  //  let cont =this.cont.nativeElement
  //  let cont =this.cont.nativeElement
     doc.setFontSize(6);
     
  //  doc.text(3,37,ID.innerHTML);
  //  doc.text(22,37,FN.innerHTML );
  //  doc.text(53,37, LN.innerHTML);
  //  doc.text(85,37, MN.innerHTML);
  //  doc.text(119,37, DP.innerHTML);
  //  doc.text(151,37, DS.innerHTML);
  //  doc.text(183,37, DJ.innerHTML);
  
  doc.fromHTML(Table.innerHTML,20,20000,{
     'width':2,
   // 'elementHandlers': specialElementHandlers

  });
   
   this.dataSource.data.forEach(e=>{
   this.rows.push(e);
})
  
  //doc.autoTable(this.displayedColumns,this.rows);
   
  doc.save('text.pdf');
   
 }  
// //********************************************************** *
// print = () => {
//   let doc = new jsPDF();
   
//   doc.autoTable({
//     head: [['Log','', 'Amount']],
//     body: this.getLiveData() //returning [["log1", "$100"], ["log2", "$200"]]
//   });
//   doc.save('table.pdf')
// }
ExportTOExcel()
{
  const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet
  (this.table.nativeElement);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
  /* save to file */
  XLSX.writeFile(wb, 'Report.xlsx');
  
}

editemployee(id)
{
  this.showEmployee=false;
  this.editEmployeeForm=true;
  console.log(id);
  this._Adminservice.getEmployeeId(id).subscribe(result=>{
    console.log("result==>"+result);
    
    this.editnewemployee=result;
    console.log(result.employeeFirstName);
  });
}
updateEmployee(editnewemployee)
{
  this.showEmployee=true;
  this.editEmployeeForm=false;
 // console.log(editEmployee.name);
  this._Adminservice.updateemp(editnewemployee).subscribe(result=>
    {
      console.log(result);
      
    });
   // this.ngOnInit();
}

 deleteemployee(id)
 {
   console.log("delete id=> "+id);
   this._Adminservice.deleteEmp(id).subscribe(result=>{
     console.log("Employee is deleted");
     
   });
  
}  
}









