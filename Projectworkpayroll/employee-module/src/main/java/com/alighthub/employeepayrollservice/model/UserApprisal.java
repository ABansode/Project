package com.alighthub.employeepayrollservice.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserApprisal {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int apprisal_id;
	private int user_id;
	private int apprisal_value;
	private int empid;
	public int getEmpid() {
		return empid;
	}
	public void setEmpid(int empid) {
		this.empid = empid;
	}
	public int getApprisal_id() {
		return apprisal_id;
	}
	public void setApprisal_id(int apprisal_id) {
		this.apprisal_id = apprisal_id;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public int getApprisal_value() {
		return apprisal_value;
	}
	public void setApprisal_value(int apprisal_value) {
		this.apprisal_value = apprisal_value;
	}
	
}
