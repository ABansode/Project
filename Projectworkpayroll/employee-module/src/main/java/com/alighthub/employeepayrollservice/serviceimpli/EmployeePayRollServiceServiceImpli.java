package com.alighthub.employeepayrollservice.serviceimpli;



import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import com.alighthub.employeepayrollservice.common.GenrateSalarySlip;
import com.alighthub.employeepayrollservice.common.GenrateSalarySlipEmployee;
import com.alighthub.employeepayrollservice.common.GenrateSalarySlipUser;
import com.alighthub.employeepayrollservice.dao.EmployeePayRollServiceDao;
import com.alighthub.employeepayrollservice.model.Login;
import com.alighthub.employeepayrollservice.model.MonthlySalaryGenrate;
import com.alighthub.employeepayrollservice.model.MonthlySalaryGenrate1;
import com.alighthub.employeepayrollservice.model.SalarySlipStructure;
import com.alighthub.employeepayrollservice.model.AdminRegistration;
import com.alighthub.employeepayrollservice.model.EmployeeRegistration;
import com.alighthub.employeepayrollservice.model.SalarySlipStructure1;
import com.alighthub.employeepayrollservice.service.EmployeePayRollserviceService;
import com.itextpdf.text.log.SysoLogger;
import com.itextpdf.text.pdf.PdfStructTreeController.returnType;

import ch.qos.logback.classic.net.SyslogAppender;
import freemarker.template.Configuration;
import freemarker.template.Template;
@Service
public class EmployeePayRollServiceServiceImpli implements EmployeePayRollserviceService{
    //invoicepdf
	
    //List<EmployeeRegistration> employeereport; 
	MonthlySalaryGenrate1 payslip;
	@Autowired
	private EmployeePayRollServiceDao  employeePayRollServiceDao;
	
	@Autowired
	public JavaMailSender emailsend;
	
	@Autowired
	private Configuration fremakcon;
	
	@Override
	public Login checkLogin(Login login) {
		
		Login list=employeePayRollServiceDao.checkLogin(login);
		return list;
	}

	@Override
	public void RegisterCheck(AdminRegistration newAdminRegistration) {
		Login log = new Login();
		log.setLogin_roll(101);
		log.setLogin_pass("admin@123");
		log.setAdminRegistration(newAdminRegistration);
		newAdminRegistration.setLogin(log);
		employeePayRollServiceDao.adminRegisterCheck(newAdminRegistration);		
	}

	
	//Pay roll system (salary slip with employee registration)
	@Override
	public void employeeRegistration(EmployeeRegistration employeeRegistration) {
		
		Login log = new Login();
		SalarySlipStructure1 salarySlipStructure = new SalarySlipStructure1();
		log.setLogin_roll(102);
		log.setLogin_pass("employee@123");
		log.setEmployeeRegistration(employeeRegistration);
		employeeRegistration.setLogin(log);
		 
		salarySlip(employeeRegistration,salarySlipStructure);
		
	employeePayRollServiceDao.employeeRegistration(employeeRegistration,salarySlipStructure);
	  System.out.println("Employee-----"+employeeRegistration.getEmployeeId()+""+log.getLogin_pass()+""+log.getEmployeeRegistration().getEmployeeEmail() );
	  try {
			sendEmailEmployeeLoginDetatils(employeeRegistration);
		} 
	  
	  catch (Exception e) {
		
			e.printStackTrace();
		}
		
	}

	public void salarySlip(EmployeeRegistration employeeRegistration,SalarySlipStructure1 salarySlipStructure)
	{
		//Salary Structure
		
				double gradPay;
				double da;
				double hra;
				double ta=800;
				double incometax = 2000;
				double pt = 200;
				double lic = 500;
				double rd = 500;
				double insurance = 1000;
				double grossSalary;
				double netSalary;
				
				gradPay = employeeRegistration.getBasicSalary()*40/100;

				salarySlipStructure.setBasicSalary(employeeRegistration.getBasicSalary());
				double gb = gradPay+salarySlipStructure.getBasicSalary();
				salarySlipStructure.setGradePay(gradPay);
				da = gb*142/100;
				salarySlipStructure.setDA(da);
				hra = gb*10/100;
				salarySlipStructure.setHRA(hra);
				
				grossSalary = gb+da+hra+ta;
				
				salarySlipStructure.setGrossSalary(grossSalary);
				
				// Deduction
				double pf = employeeRegistration.getBasicSalary()*12/100;
				salarySlipStructure.setPF(pf);
				salarySlipStructure.setIncomeTax(incometax);
				salarySlipStructure.setPT(pt);
				salarySlipStructure.setLIC(lic);
				salarySlipStructure.setRD(rd);
				salarySlipStructure.setInsurance(insurance);
				salarySlipStructure.setTA(ta);
				double deduction = incometax+pt+lic+rd+pf+insurance;
				salarySlipStructure.setTotalDeduction(deduction);
				netSalary = grossSalary-deduction;
				
				salarySlipStructure.setNetSalary(netSalary);	
				employeeRegistration.setEmployeePackage(grossSalary*12);
				
				salarySlipStructure.setEmployeeRegistration(employeeRegistration);
				//employeeRegistration.setSalarySlipStructure(salarySlipStructure);

	}
	@Override
	public SalarySlipStructure1 employeSalaryStructure(int id) {
		
		System.out.println("**********************************************************Service");
		SalarySlipStructure1 slip = employeePayRollServiceDao.employeSalaryStructure(id);
		System.out.println("***********************************************************PDF");
		GenrateSalarySlip generatepdf = new GenrateSalarySlip();
		generatepdf.createPDF(slip);
		
		System.out.println(slip.getEmployeeRegistration().getEmployeeId());
		System.out.println(slip.getSalaryid());
		return slip;
		
	}
	
	//Mail Sending ===============================================================================
	
	public void sendEmail(AdminRegistration newAdminRegistration) throws Exception {   
		   
		   MimeMessage message = emailsend.createMimeMessage();
		           MimeMessageHelper helper = new MimeMessageHelper(message);
		           Map<String, Object> model = new HashMap<>();
		           model.put("user", newAdminRegistration.getAdminFirstName());
		           fremakcon.setClassForTemplateLoading(this.getClass(), "/");
		           Template t = fremakcon.getTemplate("welcome.ftl");
		           String text = FreeMarkerTemplateUtils.processTemplateIntoString(t, model);
		           helper.setTo(newAdminRegistration.getAdminEmail());
		           helper.setText(text, true); // set to html
		           helper.setSubject("Hi");
		           emailsend.send(message);
		       }
	
	public void sendEmailEmp(EmployeeRegistration employeeRegistration) throws Exception {   
		   
		   MimeMessage message = emailsend.createMimeMessage();
		           MimeMessageHelper helper = new MimeMessageHelper(message);
		           Map<String, Object> model = new HashMap<>();
		           model.put("user", employeeRegistration.getEmployeeFirstName());
		           fremakcon.setClassForTemplateLoading(this.getClass(), "/");
		           Template t = fremakcon.getTemplate("welcome.ftl");
		           String text = FreeMarkerTemplateUtils.processTemplateIntoString(t, model);
		           helper.setTo(employeeRegistration.getEmployeeEmail());
		           helper.setText(text, true); // set to html
		           helper.setSubject("Hi");
		           emailsend.send(message);
		       }
	
	
	


	public List<EmployeeRegistration> getAllEmployee(){
		
     		
       // employeereport=
		 return 		employeePayRollServiceDao.getAllEmployee();
      /*  GenrateEmployeeReport generatepdf = new GenrateEmployeeReport();
		generatepdf.createPDF(employeereport);
		*/    
        //employeereport;
		
	     }
	

	public AdminRegistration adminProfileDisplay(int id) {

		AdminRegistration adminRegistration=null;
		List<AdminRegistration>	list=employeePayRollServiceDao.adminProfileDisplay( id);
	
	     for(AdminRegistration a:list)
	     {
	    System.out.println(	a.getLogin().getLogin_id()+""+
	    	a.getLogin().getLogin_pass());
	    	adminRegistration=a;
	     }
	return adminRegistration;
	}
        
	public MonthlySalaryGenrate1 genretMonthlySalary(MonthlySalaryGenrate1 monthlySalaryGenrate1) {
		System.out.println("month "+monthlySalaryGenrate1.getMonth()+" Year "+monthlySalaryGenrate1.getYear()+" emp"+monthlySalaryGenrate1.getMonthelySalaryId());
	     	 MonthlySalaryGenrate1 monthlysalryslipdata =monthlySalaryGenrate1;
		    SalarySlipStructure1 salarySlipStructure=new SalarySlipStructure1();
		    
	        salarySlipStructure   =employeePayRollServiceDao.getEmployeeSalarySlipStructure(monthlySalaryGenrate1.getMonthelySalaryId() );
            monthlySalaryGenrate1.setDA(salarySlipStructure.getDA());
            monthlySalaryGenrate1.setHRA(salarySlipStructure.getHRA());
            monthlySalaryGenrate1.setLIC(salarySlipStructure.getLIC());
            monthlySalaryGenrate1.setPF(salarySlipStructure.getPF());
            monthlySalaryGenrate1.setPT(salarySlipStructure.getPT());
            monthlySalaryGenrate1.setRD(salarySlipStructure.getRD());
            monthlySalaryGenrate1.setTA(salarySlipStructure.getTA());
            monthlySalaryGenrate1.setAnnualpackage(salarySlipStructure.getAnnualpackage());
            monthlySalaryGenrate1.setGradePay(salarySlipStructure.getGradePay());
            monthlySalaryGenrate1.setGrossSalary(salarySlipStructure.getGrossSalary());
            monthlySalaryGenrate1.setIncomeTax(salarySlipStructure.getIncomeTax());
           
           monthlySalaryGenrate1.setInsurance(salarySlipStructure.getInsurance());
           monthlySalaryGenrate1.setLeavDeducton(salarySlipStructure.getNetSalary() - monthlySalaryGenrate1.getNetSalary());

           monthlySalaryGenrate1.setMonth(monthlySalaryGenrate1.getMonth());
           monthlySalaryGenrate1.setNetSalary(salarySlipStructure.getNetSalary()* monthlySalaryGenrate1.getNumberOfPresentDays() /monthlySalaryGenrate1.getNumberOfWorkingDays() );

          employeePayRollServiceDao.createEmployeeMonthlysalary(monthlySalaryGenrate1);
          
          payslip =employeePayRollServiceDao.getpayslipdata(monthlysalryslipdata);
          System.out.println(payslip);
           System.out.println(payslip.getDA()+""+payslip.getMonthelySalaryId());     
           GenrateSalarySlipEmployee genratepdf=new GenrateSalarySlipEmployee();
   		    genratepdf.createPDF(payslip);

           try {
        	   sendEmail();
           }
           catch(Exception e)
           {
        	   e.printStackTrace();
           }
           
         return payslip ;
	}

	private void sendEmail() throws Exception {
		MimeMessage message = emailsend.createMimeMessage();
		boolean multipart = true;
		MimeMessageHelper helper = new MimeMessageHelper(message, multipart);
		helper.setTo(payslip.getEmployeeRegistration().getEmployeeEmail());
		helper.setSubject("Test email with attachments");
		helper.setText("Hello, Im testing email with attachments!");
		String path1 = "E:/data/"+payslip.getEmployeeRegistration().getEmployeeFirstName()+""+payslip.getMonth()+".pdf";
		System.out.println("file path --------------------"+path1);
		FileSystemResource file1 = new FileSystemResource(new File(path1));
		System.out.println("file name in mail ----------------------"+file1.getFilename());
		helper.addAttachment(file1.getFilename(), file1);
		emailsend.send(message);
	}
	
	private void sendEmailEmployeeLoginDetatils(EmployeeRegistration employeeRegistration) throws Exception {
		MimeMessage message = emailsend.createMimeMessage();
		boolean multipart = true;
		MimeMessageHelper helper = new MimeMessageHelper(message, multipart);
		helper.setTo(employeeRegistration.getEmployeeEmail());
		helper.setSubject("Your registration success");
		helper.setText("Hello, Im testing email with attachments!"+"Your login id  :"+employeeRegistration.getLogin().getLogin_id()+""+"Password :"+employeeRegistration.getLogin().getLogin_pass());
		
		emailsend.send(message);
	}
	
	@Override
	public EmployeeRegistration getEmployee(int employeeId)
	{
		// TODO Auto-generated method stub
		return employeePayRollServiceDao.getEmployee(employeeId);
	}

	@Override
	public int updateEmployee(EmployeeRegistration employeeregistration) 
	{
		// TODO Auto-generated method stub
		return employeePayRollServiceDao.updateemployee(employeeregistration);
	}

	@Override
	public int deleteEmployee(int employeeId) 
	{
		
		return employeePayRollServiceDao.deleteEmployee(employeeId);
	}

	
	
	
	
	
	
	

}
