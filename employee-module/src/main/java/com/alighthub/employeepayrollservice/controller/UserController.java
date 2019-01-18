package com.alighthub.employeepayrollservice.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.alighthub.employeepayrollservice.model.Login;
import com.alighthub.employeepayrollservice.model.MonthlySalaryGenrate;
import com.alighthub.employeepayrollservice.model.UserRegistration;
import com.alighthub.employeepayrollservice.service.EmployeePayRollServiceUserService;

@CrossOrigin
@RestController
@RequestMapping(value="/user")
public class UserController {

	//==========================================================Autowire of all user==================================//
	@Autowired
	private EmployeePayRollServiceUserService employeePayRollServiceUserService;

	//===============================================mapping information of all user==================================//	

	Logger logger = LogManager.getLogger(this.getClass());
	//================================================User Personal Details===========================================//
	@GetMapping(value="/userPersonalDetails/{userrid}")
	public UserRegistration getUserPersonalDetailsById(@PathVariable ("userrid") Integer userrid)
	{	logger.info("***********************************************************");
		logger.info(userrid);
		logger.info("***********************************************************");
		UserRegistration upd1 = employeePayRollServiceUserService.userPersonalDatails(userrid);
		logger.info("***********************************************************");
		logger.info(upd1.getUserFirstName());
		logger.info(upd1.getUserLastName());
		logger.info("***********************************************************");
		return upd1;
	}	
	//================================================================================================================//	
	//================================================User Pay Slip===================================================//
	@PostMapping(value="/userPayslip")
	public MonthlySalaryGenrate payslipdata(@RequestBody MonthlySalaryGenrate monthlySalaryGenrate)
	{	
		logger.info("***********************************************************");
		logger.info(monthlySalaryGenrate.getMonth());
		logger.info(monthlySalaryGenrate.getYear());
		logger.info(monthlySalaryGenrate.getUserRegistration().getUserrid());
		logger.info("***********************************************************");
		MonthlySalaryGenrate payslip =employeePayRollServiceUserService.paySlipPost(monthlySalaryGenrate);
		return payslip;
	}
	//==================================================================================================================//
	//================================================old password of user===================================================//

	@GetMapping(value="/confirmPassword/{oldPassword}")
	public boolean confirmPassword(@PathVariable("oldPassword") String password) {	
		logger.info("***********************************************************");
		logger.info(password);
		logger.info("***********************************************************");
		return employeePayRollServiceUserService.getpassword1(password);
	}
	//=========================================================================================================================//	
	//================================================new password of user=====================================================//
	@PostMapping(value="/changepass")
	public int changepass(@RequestBody Login login)
	{
		logger.info("***********************************************************");
		logger.info(login.getLogin_id());
		logger.info(login.getLogin_pass());
		logger.info("***********************************************************");
	int list= employeePayRollServiceUserService.changepassword(login);
	return list;	
	}
	//========================================================================================================================//
	//================================================Form sixteen======================================================//
	@GetMapping(value="/formsixteen1/{FormSixteen}")
	public void formsixteen(@PathVariable("FormSixteen") Integer userRegistration) 
	{
		logger.info("***********************************************************");
		logger.info(userRegistration);
		logger.info("***********************************************************");
		System.out.println(userRegistration);
		
	//	FormSixteen formSixteen=employeePayRollServiceUserService.formsixteen(userRegistration);
	//	System.out.println(formSixteen.getFormSixteenId()+" "+formSixteen.getUserRegistration());		
	}

}
