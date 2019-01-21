package com.alighthub.employeepayrollservice.service;

import java.util.List;
import java.util.Set;

import com.alighthub.employeepayrollservice.model.EmployeeRegistration;
import com.alighthub.employeepayrollservice.model.MonthlySalaryGenrate;
import com.alighthub.employeepayrollservice.model.SalarySlipStructure;
import com.alighthub.employeepayrollservice.model.UserApprisal;
import com.alighthub.employeepayrollservice.model.UserRegistration;

public interface EmployeePayRollserviceEmployeeService {
	public boolean insertUserRegistrationData(UserRegistration userRegistration);
	 public void sendEmail(UserRegistration userRegistration) throws Exception;
	 public EmployeeRegistration getEmployeeDetails(int employeeId);
	 public SalarySlipStructure genrateSalary(Set<String> salaryDetails);
	 public void getFixedSalaryDetail(MonthlySalaryGenrate monthlySalaryGenrate);
	 public Set<String> getClientCompanyNameList();
	 public List<UserApprisal> getApprisalList(int empid);
	 public int approveApprisal(UserApprisal userApprisal);
	 public int updateSalarySlipStructure(UserRegistration userRegistration,UserApprisal userApprisal);
}
