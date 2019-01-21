import { Employeeregistration } from "../employee-registration/employee-registration.model";

export class SalarySlipStructure
{
    private salaryid:number;
	private basicSalary:number;
	private gradePay:number;
	private DA:number;
	private HRA:number;
	private TA:number;
	private grossSalary:number;
	private incomeTax:number;
	private PT:number;
	private LIC:number;
	private RD:number;
	private deductionTotal:number;
	private netSalary:number;
	private PF:number;
	private employeeRegistration:Employeeregistration
}