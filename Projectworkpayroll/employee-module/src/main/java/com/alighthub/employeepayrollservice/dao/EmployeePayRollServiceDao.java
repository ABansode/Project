package com.alighthub.employeepayrollservice.dao;



import java.util.List;

import com.alighthub.employeepayrollservice.model.Login;
import com.alighthub.employeepayrollservice.model.MonthlySalaryGenrate1;
import com.alighthub.employeepayrollservice.model.SalarySlipStructure;
import com.alighthub.employeepayrollservice.model.AdminRegistration;
import com.alighthub.employeepayrollservice.model.EmployeeRegistration;
import com.alighthub.employeepayrollservice.model.SalarySlipStructure1;
import com.alighthub.employeepayrollservice.model.UserApprisal;

public interface EmployeePayRollServiceDao {
	
	public Login checkLogin(Login login);
	public void adminRegisterCheck(AdminRegistration newAdminRegistration);
	public void employeeRegistration(EmployeeRegistration employeeRegistration,SalarySlipStructure1 salarySlipStructure);
	public SalarySlipStructure1 employeSalaryStructure(int id);
	public List<EmployeeRegistration> getAllEmployee();
	public List<AdminRegistration> adminProfileDisplay(int id);
	public SalarySlipStructure1 getEmployeeSalarySlipStructure(int i);
	public void createEmployeeMonthlysalary(MonthlySalaryGenrate1 monthlySalaryGenrate1 );
	public MonthlySalaryGenrate1 getpayslipdata(MonthlySalaryGenrate1 monthlysalryslipdata);
	public EmployeeRegistration getEmployee(int id);
	public int updateemployee(EmployeeRegistration employeeregistration);
	public int deleteEmployee(int employeeId);
	
}
