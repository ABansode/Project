package com.alighthub.employeepayrollservice.common;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import com.alighthub.employeepayrollservice.EmployeePayrollServiceApplication;

public class ServletInitializer extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(EmployeePayrollServiceApplication.class);
	}

}
