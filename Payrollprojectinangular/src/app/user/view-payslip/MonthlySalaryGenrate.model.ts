import { UserRegistration } from "../UserRegistration.model";


export class MonthlySalaryGenrate{

    monthelySalaryId:number;
    month:String;
    year:number;
    numberOfDays:number;
    netSalary:number;
    annualpackage:number;
    gradePay:number;
    DA:number;
    HRA:number;
    TA:number;
    grossSalary:number;
    incomeTax:number;
    
    PF:number;
    PT:number;
    LIC:number;
    RD:number;
    insurance:number;
    leavDeducton:number;
    userRegistration:UserRegistration;
}