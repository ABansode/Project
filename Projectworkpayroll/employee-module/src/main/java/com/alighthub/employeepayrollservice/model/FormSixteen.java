package com.alighthub.employeepayrollservice.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class FormSixteen {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int formSixteenId;
	
	@OneToOne(cascade=CascadeType.ALL)
	private UserRegistration userRegistration;

	public int getFormSixteenId() {
		return formSixteenId;
	}

	public void setFormSixteenId(int formSixteenId) {
		this.formSixteenId = formSixteenId;
	}

	public UserRegistration getUserRegistration() {
		return userRegistration;
	}

	public void setUserRegistration(UserRegistration userRegistration) {
		this.userRegistration = userRegistration;
	}


	

}
