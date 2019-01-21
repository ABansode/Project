package com.alighthub.employeepayrollservice.serviceimpli;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

import com.alighthub.employeepayrollservice.dao.EmployeePayRollServiceEmployeeDao;
import com.alighthub.employeepayrollservice.model.Client;
import com.alighthub.employeepayrollservice.model.EmployeeRegistration;
import com.alighthub.employeepayrollservice.model.Login;
import com.alighthub.employeepayrollservice.model.MonthlySalaryGenrate;
import com.alighthub.employeepayrollservice.model.SalarySlipStructure;
import com.alighthub.employeepayrollservice.model.UserApprisal;
import com.alighthub.employeepayrollservice.model.UserRegistration;
import com.alighthub.employeepayrollservice.service.EmployeePayRollserviceEmployeeService;

import freemarker.template.Configuration;
import freemarker.template.Template;

@Service
public class EmployeePayRollServiceEmployeeServiceImpli implements
		EmployeePayRollserviceEmployeeService {

	@Autowired
	private EmployeePayRollServiceEmployeeDao employeePayRollServiceEmployeeDao;

	UserRegistration userRegistration = new UserRegistration();
	Client client = new Client();
	static Set<String> salaryFactors=new HashSet<String>();
	Login l = new Login();

	@Override
	public boolean insertUserRegistrationData(UserRegistration userRegistration1) {
		boolean flag = employeePayRollServiceEmployeeDao
				.checkDuplicateEmail(userRegistration1.getUserEmail());
		if (flag) {
			l.setLogin_roll(103);
			l.setLogin_pass("user1234");
			l.setUserRegistration(userRegistration1);
			userRegistration1.setLogin(l);

			Client client1 = employeePayRollServiceEmployeeDao
					.getClientData(userRegistration1.getCompanyName());
			userRegistration1.setClient(client1);
			userRegistration = userRegistration1;
			// employeePayRollServiceEmployeeDao.insertUserRegistrationData(userRegistration1,
			// l);
			flag = true;
		} else {
			flag = false;
		}

		return flag;
	}

	@Autowired
	public JavaMailSender emailsend;

	@Autowired
	private Configuration fremakcon;

	public void sendEmail(UserRegistration userRegistration) throws Exception {

		MimeMessage message = emailsend.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);
		Map<String, Object> model = new HashMap<>();
		model.put("username", l.getLogin_id());
		model.put("password", l.getLogin_pass());
		model.put("link", "http://localhost:4200/login");
		fremakcon.setClassForTemplateLoading(this.getClass(), "/");
		Template t = fremakcon.getTemplate("welcome.ftl");
		String text = FreeMarkerTemplateUtils.processTemplateIntoString(t,
				model);

		helper.setTo(userRegistration.getUserEmail());
		helper.setText(text, true);
		helper.setSubject("Payroll User Registration");
		emailsend.send(message);

	}

	@Override
	public EmployeeRegistration getEmployeeDetails(int employeeId) {
		EmployeeRegistration employeeRegistration = employeePayRollServiceEmployeeDao
				.getEmployeeDetails(employeeId);
		return employeeRegistration;

	}

	@Override
	public SalarySlipStructure genrateSalary(Set<String> salaryDetails) {
		this.salaryFactors=salaryDetails;
		SalarySlipStructure salarySlipStructure = new SalarySlipStructure();

		double gb = 0;

		/*
		 * ######################################## Earning
		 * ########################################
		 */
		for (String s : salaryDetails) {

			if (s.equals("gradePay")) {

				salarySlipStructure.setGradePay(userRegistration
						.getBasicSalary() * 40 / 100);
				gb = salarySlipStructure.getGradePay()
						+ userRegistration.getBasicSalary();
				break;
			} else {
				salarySlipStructure.setGradePay(0);
			}
		}
		for (String s : salaryDetails) {
			if (s.equals("DA")) {
				salarySlipStructure.setDA(gb * 142 / 100);
				break;
			} else {
				salarySlipStructure.setDA(0);

			}
		}
		for (String s : salaryDetails) {
			if (s.equals("HRA")) {
				salarySlipStructure.setHRA(gb * 10 / 100);
				break;
			} else {
				salarySlipStructure.setHRA(0);
			}

		}
		for (String s : salaryDetails) {
			if (s.equals("TA")) {
				salarySlipStructure.setTA(800);
				break;
			} else {
				salarySlipStructure.setTA(0);

			}
		}
		/*
		 * ######################################## Deduction
		 * ########################################
		 */
		for (String s : salaryDetails) {
			if (s.equals("incomeTax")) {
				salarySlipStructure.setIncomeTax(2000);
				break;
			} else {
				salarySlipStructure.setIncomeTax(0);

			}
		}
		for (String s : salaryDetails) {

			if (s.equals("PF")) {
				salarySlipStructure
						.setPF(userRegistration.getBasicSalary() * 12 / 100);
				break;
			} else {
				salarySlipStructure.setPF(0);
			}

		}
		for (String s : salaryDetails) {

			if (s.equals("PT")) {
				salarySlipStructure.setPT(200);
				break;
			} else {
				salarySlipStructure.setPT(0);
			}

		}
		for (String s : salaryDetails) {
			if (s.equals("LIC")) {
				salarySlipStructure.setLIC(500);
				break;
			} else {
				salarySlipStructure.setLIC(0);
			}
		}
		for (String s : salaryDetails) {

			if (s.equals("RD")) {
				salarySlipStructure.setRD(500);
				break;
			} else {
				salarySlipStructure.setRD(0);
			}

		}
		for (String s : salaryDetails) {

			if (s.equals("insurance")) {
				salarySlipStructure.setInsurance(1000);
				break;
			} else {
				salarySlipStructure.setInsurance(0);
			}

		}

		salarySlipStructure.setGrossSalary(gb + salarySlipStructure.getDA()
				+ salarySlipStructure.getHRA() + salarySlipStructure.getTA());
		salarySlipStructure.setTotalDeduction(salarySlipStructure
				.getIncomeTax()
				+ salarySlipStructure.getIncomeTax()
				+ salarySlipStructure.getPF()
				+ salarySlipStructure.getPT()
				+ salarySlipStructure.getRD()
				+ salarySlipStructure.getInsurance());

		salarySlipStructure.setNetSalary(salarySlipStructure.getGrossSalary()
				- salarySlipStructure.getTotalDeduction());
		salarySlipStructure.setAnnualpackage(12 * salarySlipStructure
				.getGrossSalary());

		salarySlipStructure.setUserRegistration(userRegistration);
		employeePayRollServiceEmployeeDao.genrateSalary(userRegistration,
				salarySlipStructure, l);

		return salarySlipStructure;
	}

	@Override
	public void getFixedSalaryDetail(MonthlySalaryGenrate monthlySalaryGenrate) {
		SalarySlipStructure salarySlipStructure = employeePayRollServiceEmployeeDao
				.getFixedSalaryDetail(monthlySalaryGenrate
						.getMonthelySalaryId());

		monthlySalaryGenrate.setGradePay(salarySlipStructure.getGradePay());
		monthlySalaryGenrate.setDA(salarySlipStructure.getDA());
		monthlySalaryGenrate.setHRA(salarySlipStructure.getHRA());
		monthlySalaryGenrate.setTA(salarySlipStructure.getTA());

		monthlySalaryGenrate.setIncomeTax(salarySlipStructure.getIncomeTax());
		monthlySalaryGenrate.setPF(salarySlipStructure.getPF());
		monthlySalaryGenrate.setRD(salarySlipStructure.getRD());
		monthlySalaryGenrate.setPT(salarySlipStructure.getPT());
		monthlySalaryGenrate.setLIC(salarySlipStructure.getLIC());
		monthlySalaryGenrate.setInsurance(salarySlipStructure.getInsurance());

		monthlySalaryGenrate.setGrossSalary(salarySlipStructure
				.getGrossSalary());

		monthlySalaryGenrate.setNetSalary(salarySlipStructure.getNetSalary()
				* monthlySalaryGenrate.getNumberOfDays() / 28);
		monthlySalaryGenrate.setAnnualpackage(salarySlipStructure
				.getAnnualpackage());
		monthlySalaryGenrate.setLeavDeducton(salarySlipStructure.getNetSalary()
				- monthlySalaryGenrate.getNetSalary());
		employeePayRollServiceEmployeeDao
				.createMonthlySalary(monthlySalaryGenrate,
						monthlySalaryGenrate.getMonthelySalaryId(),
						salarySlipStructure);

	}

	@Override
	public Set<String> getClientCompanyNameList() {

		return employeePayRollServiceEmployeeDao.getClientCompanyNameList();
	}

	@Override
	public List<UserApprisal> getApprisalList(int empid) {
		return employeePayRollServiceEmployeeDao.getApprisalList(empid);
	}

	@Override
	public int approveApprisal(UserApprisal userApprisal) {
		double basicSalary=0;
		double increment=0;
		UserRegistration userRegistration=employeePayRollServiceEmployeeDao.getUser(userApprisal);
		basicSalary=userRegistration.getBasicSalary();
		increment=basicSalary*userApprisal.getApprisal_value()/100;
		System.out.println("after increment "+basicSalary+increment);
		userRegistration.setBasicSalary(basicSalary+increment);
		int i=employeePayRollServiceEmployeeDao.updateUser(userRegistration);
		if(i>0){
			System.out.println("in service apprisal");
			this.updateSalarySlipStructure(userRegistration,userApprisal);
		}
		return i;
	}

	@Override
	public int updateSalarySlipStructure(UserRegistration userRegistration,UserApprisal userApprisal) {
		
		SalarySlipStructure salarySlipStructure = new SalarySlipStructure();
		double gb = 0;
		System.out.println("Basic salary "+userRegistration.getBasicSalary());
		
		salarySlipStructure.setGradePay(userRegistration.getBasicSalary() * 40 / 100);
		gb=salarySlipStructure.getGradePay()+userRegistration.getBasicSalary();
		salarySlipStructure.setDA(gb*142/100);
		salarySlipStructure.setHRA(gb*10/100);
		salarySlipStructure.setTA(800);
		/*
		 * ######################################## Deduction
		 * ########################################
		 */
		salarySlipStructure.setIncomeTax(2000);
		salarySlipStructure.setPF(userRegistration.getBasicSalary()*12/100);
		salarySlipStructure.setPF(200);
		salarySlipStructure.setLIC(500);
		salarySlipStructure.setRD(500);
		salarySlipStructure.setInsurance(1000);
		
		salarySlipStructure.setGrossSalary(gb + salarySlipStructure.getDA()
				+ salarySlipStructure.getHRA() + salarySlipStructure.getTA());
		salarySlipStructure.setTotalDeduction(salarySlipStructure
				.getIncomeTax()
				+ salarySlipStructure.getIncomeTax()
				+ salarySlipStructure.getPF()
				+ salarySlipStructure.getPT()
				+ salarySlipStructure.getRD()
				+ salarySlipStructure.getInsurance());

		salarySlipStructure.setNetSalary(salarySlipStructure.getGrossSalary()
				- salarySlipStructure.getTotalDeduction());
		salarySlipStructure.setAnnualpackage(12 * salarySlipStructure
				.getGrossSalary());

		salarySlipStructure.setUserRegistration(userRegistration);
		System.out.println("service data =="+salarySlipStructure.getSalaryid());
		int i=employeePayRollServiceEmployeeDao.updateSalaryStructure(salarySlipStructure,userApprisal,l);
		return i;
	}

}
