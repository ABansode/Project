import { UserRegistration } from "../UserRegistration.model";

export class Payslip
{
    salaryid:number;
	month:number;	
	year:string;
	basicSalary:number;
	gradePay:number;
	DA:number;
	HRA:number;
	TA:number;
	grossSalary:number;
	incomeTax:number;
	PT:number;
	LIC:number;
	RD:number;
	deductionTotal:number;
	netSalary:number;
	PF:number;
    user:UserRegistration;
    
}