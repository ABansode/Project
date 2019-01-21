package com.alighthub.employeepayrollservice.service;



import com.alighthub.employeepayrollservice.model.Login;
import com.alighthub.employeepayrollservice.model.MonthlySalaryGenrate1;
import com.alighthub.employeepayrollservice.model.SalarySlipStructure;

import java.util.List;

import com.alighthub.employeepayrollservice.model.AdminRegistration;
import com.alighthub.employeepayrollservice.model.EmployeeRegistration;
import com.alighthub.employeepayrollservice.model.SalarySlipStructure1;

public interface EmployeePayRollserviceService {

	public Login checkLogin(Login login);
	public void RegisterCheck(AdminRegistration newAdminRegistration);
	public void employeeRegistration(EmployeeRegistration employeeRegistration);
	public SalarySlipStructure1 employeSalaryStructure(int id);
	public void sendEmail(AdminRegistration newAdminRegistration)throws Exception;
	public void sendEmailEmp(EmployeeRegistration employeeRegistration)throws Exception;
	public AdminRegistration adminProfileDisplay(int id);
	public List<EmployeeRegistration> getAllEmployee();
	public MonthlySalaryGenrate1 genretMonthlySalary(MonthlySalaryGenrate1 monthlySalaryGenrate1);
	public EmployeeRegistration getEmployee(int employeeId);
	public int updateEmployee(EmployeeRegistration employeeregistration);
	public int deleteEmployee(int employeeId);
}
