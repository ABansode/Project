package com.alighthub.employeepayrollservice.controller;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alighthub.employeepayrollservice.model.AdminRegistration;
import com.alighthub.employeepayrollservice.model.EmployeeRegistration;
import com.alighthub.employeepayrollservice.model.MonthlySalaryGenrate1;
import com.alighthub.employeepayrollservice.model.SalarySlipStructure1;
import com.alighthub.employeepayrollservice.service.EmployeePayRollserviceService;
import com.itextpdf.text.log.SysoLogger;


@CrossOrigin
@RestController
@RequestMapping("/welcome_admin")
public class AdminController {	
	
	@Autowired
	private EmployeePayRollserviceService employeePayRollserviceService;
	
	Logger logger = LogManager.getLogger(this.getClass());
	
	@PostMapping(value="/insert")
	public void RegisterCheck(@RequestBody AdminRegistration newAdminRegistration) throws Exception {
		System.out.println("photo-----"+newAdminRegistration.getAdminPhoto());
		logger.info("***********************************************************");
		logger.info(newAdminRegistration.getAdminFirstName());
		logger.info(newAdminRegistration.getAdminLastName());
		logger.info(newAdminRegistration.getAdminEmail());
		logger.info("***********************************************************");
		employeePayRollserviceService.RegisterCheck(newAdminRegistration);
		//employeePayRollserviceService.sendEmail(newAdminRegistration);
	}
	
	@PostMapping(value="/insertemployee")
	public void employeeRegisterCheck(@RequestBody EmployeeRegistration employeeRegistration) throws Exception {
		logger.info("***********************************************************");
		logger.info(employeeRegistration.getEmployeeFirstName());
		logger.info(employeeRegistration.getEmployeeLastName());
		logger.info(employeeRegistration.getEmployeeEmail());
		logger.info(employeeRegistration.getBasicSalary());
		logger.info(employeeRegistration.getEmployeePackage());
		logger.info("***********************************************************");
		employeePayRollserviceService.employeeRegistration(employeeRegistration);
		//employeePayRollserviceService.sendEmailEmp(employeeRegistration);
	}
	
	@GetMapping(value="/postpdf/{id}")
	public SalarySlipStructure1 employeeSalarySlip(@PathVariable int id) {
		System.out.println(id);
		SalarySlipStructure1 sss	= employeePayRollserviceService.employeSalaryStructure(id);
	return sss;	
	}
	//************************************************************************************
	
	
	@GetMapping(value = "/getadmin/{id}")

	public AdminRegistration adminProfileDisplay(@PathVariable ("id") int id) {

		AdminRegistration adminRegistration = employeePayRollserviceService.adminProfileDisplay(id);

		System.out.println(
				adminRegistration.getLogin().getLogin_id() + " " + adminRegistration.getLogin().getLogin_pass());

		return adminRegistration;
	}

	
	

	 @GetMapping(value="/employeedetails")
	 public List<EmployeeRegistration> getAllEmployeee(){
		 
       	return	 employeePayRollserviceService.getAllEmployee();
		 
	  	}
	
	
	 @PostMapping(value="/monthlysalarydetails")
	    public void genretMothlySalary(@RequestBody MonthlySalaryGenrate1 monthlySalaryGenrate1 )
	    {
		 System.out.println( "****************************************************************");  
	      System.out.println(monthlySalaryGenrate1.getYear());
	      System.out.println(monthlySalaryGenrate1.getMonth());
	      System.out.println(monthlySalaryGenrate1.getNumberOfPresentDays());
          System.out.println(monthlySalaryGenrate1.getNumberOfWorkingDays());
	      System.out.println(monthlySalaryGenrate1.getMonthelySalaryId());
	      
		     employeePayRollserviceService.genretMonthlySalary(monthlySalaryGenrate1 );
			System.out.println(monthlySalaryGenrate1);
	    }
	 @GetMapping(value="/getEmployee/{employeeid}")
		public EmployeeRegistration getEmployee(@PathVariable("employeeid")int employeeId)
		{
			System.out.println("inside getEmployee===");
			EmployeeRegistration employeeregistration=employeePayRollserviceService.getEmployee(employeeId);
			System.out.println("Employee id"+employeeId);
			return employeeregistration;
		}
		
		@PutMapping(value="/updateemployee")
		public void UpdateEmployee(@RequestBody EmployeeRegistration employeeregistration)
		{
			System.out.println("update ---");
			int i=employeePayRollserviceService.updateEmployee(employeeregistration);
			//return i;
		}
		
		@DeleteMapping(value="/deleteEmployee/{employeeid}")
		public int DeleteEmployee(@PathVariable("employeeid")int employeeId)
		{
			System.out.println("inside delete=>"+employeeId);
			int i=employeePayRollserviceService.deleteEmployee(employeeId);
			return i;
					
		}
	 
	 
	 
	 
	
	
	
	
	
	//invoicepdfgeneratorcontroller
//	@PostMapping(value = "/putFile")
//	public void handleFileUpload(@RequestBody CommonsMultipartFile[] fileUpload){
//
//		if (fileUpload != null && fileUpload.length > 0) {
//			for (CommonsMultipartFile aFile : fileUpload){
//
//				System.out.println("Saving file: " + aFile.getOriginalFilename());
//
//				File uploadFile = new File();
//				uploadFile.setFilename(aFile.getOriginalFilename());
//				uploadFile.setData(aFile.getBytes());
//				employeePayRollserviceService.insert(uploadFile);     
//			}
//		}
//	}
//	public void fileupload(@RequestBody File f)
//	{
//		System.out.println("SXjhgXxXxFJXGcsfjgFXJSNGFjsG"+f.getFilename());
//		f.setFilename("MYFile");
//		f.setData(f.getData());
//		employeePayRollserviceService.insert(f);
//	}

//	@GetMapping("/getFile")
//	public void openImage(Model m,@ModelAttribute File file) {
//		
//		logger.info("in view method");
//		
//		File f= employeePayRollserviceService.viewFile(file.getId());
//		System.out.println(f.getFilename());
//		System.out.println("data"+f.getData());
//		byte[] b=f.getData();
//		String s=b.toString();
//
//		ByteArrayInputStream in = new ByteArrayInputStream(f.getData());
//		BufferedImage bImageFromConvert;
//		try {
//			bImageFromConvert = ImageIO.read(in);
//			ImageIO.write(bImageFromConvert, "jpg", new java.io.File("E:\\JAVA\\workplaces\\STS Workspace\\FileuploadOld\\logo.jpg"));
//
//		    
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//
//		GenrateSalarySlip genrateSalarySlip=new GenrateSalarySlip();
//		genrateSalarySlip.createPDF(f);
//	}
}