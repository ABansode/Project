package com.alighthub.employeepayrollservice.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import com.fasterxml.jackson.annotation.JsonBackReference;



@Entity
public class SalarySlipStructure {
	

	

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="salaryid",unique=true,nullable=false)
	private int salaryid;

	
	private double basicSalary;
	private double netSalary;
	private double annualpackage;
	//=================================Adding====================================================//


	private double gradePay;
	private double DA;
	private double HRA;
	private double TA;
	private double grossSalary;

	//=================================Diduction====================================================//
	private double incomeTax;
	private double PF;
	private double PT;
	private double LIC;
	private double RD;
	private double insurance;
	private double totalDeduction;
	//=================================relational field====================================================//

	public double getInsurance() {
		return insurance;
	}

	public void setInsurance(double insurance) {
		this.insurance = insurance;
	}

	@OneToOne(fetch = FetchType.LAZY)
	private UserRegistration userRegistration;

	@OneToOne(cascade=CascadeType.ALL)
    private EmployeeRegistration employeeRegistration;

	//=================================set get ============================================================//	

	
	public int getSalaryid() {
		return salaryid;
	}

	
	public double getBasicSalary() {
		return basicSalary;
	}

	public void setBasicSalary(double basicSalary) {
		this.basicSalary = basicSalary;
	}

	public UserRegistration getUserRegistration() {
		return userRegistration;
	}

	public void setUserRegistration(UserRegistration userRegistration) {
		this.userRegistration = userRegistration;
	}

	public void setSalaryid(int salaryid) {
		this.salaryid = salaryid;
	}

	


	public double getGradePay() {
		return gradePay;
	}

	public void setGradePay(double gradePay) {
		this.gradePay = gradePay;
	}

	public double getDA() {
		return DA;
	}

	public void setDA(double dA) {
		DA = dA;
	}

	public double getHRA() {
		return HRA;
	}

	public void setHRA(double hRA) {
		HRA = hRA;
	}

	public double getTA() {
		return TA;
	}

	public void setTA(double tA) {
		TA = tA;
	}

	public double getGrossSalary() {
		return grossSalary;
	}

	public void setGrossSalary(double grossSalary) {
		this.grossSalary = grossSalary;
	}

	public double getIncomeTax() {
		return incomeTax;
	}

	public void setIncomeTax(double incomeTax) {
		this.incomeTax = incomeTax;
	}

	public double getPT() {
		return PT;
	}

	public void setPT(double pT) {
		PT = pT;
	}

	public double getLIC() {
		return LIC;
	}

	public void setLIC(double lIC) {
		LIC = lIC;
	}

	public double getRD() {
		return RD;
	}

	public void setRD(double rD) {
		RD = rD;
	}


	public double getNetSalary() {
		return netSalary;
	}

	public void setNetSalary(double netSalary) {
		this.netSalary = netSalary;
	}

	public double getPF() {
		return PF;
	}

	public void setPF(double pF) {
		PF = pF;
	}

	
	public double getAnnualpackage() {
		return annualpackage;
	}

	public void setAnnualpackage(double annualpackage) {
		this.annualpackage = annualpackage;
	}

	public double getTotalDeduction() {
		return totalDeduction;
	}

	public void setTotalDeduction(double totalDeduction) {
		this.totalDeduction = totalDeduction;
	}

	public EmployeeRegistration getEmployeeRegistration() {
		return employeeRegistration;
	}

	public void setEmployeeRegistration(EmployeeRegistration employeeRegistration) {
		this.employeeRegistration = employeeRegistration;
	}




}
