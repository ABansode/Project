package com.alighthub.employeepayrollservice.dao;

import java.util.List;
import java.util.Set;

import com.alighthub.employeepayrollservice.model.Client;
import com.alighthub.employeepayrollservice.model.EmployeeRegistration;
import com.alighthub.employeepayrollservice.model.Login;
import com.alighthub.employeepayrollservice.model.MonthlySalaryGenrate;
import com.alighthub.employeepayrollservice.model.SalarySlipStructure;
import com.alighthub.employeepayrollservice.model.UserApprisal;
import com.alighthub.employeepayrollservice.model.UserRegistration;

public interface EmployeePayRollServiceEmployeeDao {
	public void insertUserRegistrationData(UserRegistration userRegistration,
			Login login);

	public EmployeeRegistration getEmployeeDetails(int employeeId);

	public SalarySlipStructure genrateSalary(UserRegistration userRegistration,
			SalarySlipStructure salarySlipStructure, Login login);

	public SalarySlipStructure getFixedSalaryDetail(int monthelySalaryId);

	public void createMonthlySalary(MonthlySalaryGenrate monthlySalaryGenrate,
			int monthelySalaryId, SalarySlipStructure salarySlipStructure);

	public boolean checkDuplicateEmail(String email);

	public Set<String> getClientCompanyNameList();

	public Client getClientData(String companyName);

	public List<UserApprisal> getApprisalList(int empid);

	public UserRegistration getUser(UserApprisal userApprisal);
	
	public int updateUser(UserRegistration userRegistration);
	
	public int updateSalaryStructure(SalarySlipStructure salarySlipStructure,UserApprisal userApprisal,Login login);
}
