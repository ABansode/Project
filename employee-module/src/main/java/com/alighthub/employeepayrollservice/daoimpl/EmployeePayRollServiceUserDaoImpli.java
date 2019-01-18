package com.alighthub.employeepayrollservice.daoimpl;



import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.alighthub.employeepayrollservice.dao.EmployeePayRollServiceUserDao;
import com.alighthub.employeepayrollservice.model.Login;
import com.alighthub.employeepayrollservice.model.MonthlySalaryGenrate;

import com.alighthub.employeepayrollservice.model.UserRegistration;


@Repository
public class EmployeePayRollServiceUserDaoImpli implements EmployeePayRollServiceUserDao {

	//==========================================================Autowire of all user==================================//
	@Autowired
	private SessionFactory sessionFactory;	
	
	//=======================================menu of user personal details===========================================//
	@Override
	public UserRegistration userPersonalDatails(Integer userrid) {
		Session session=sessionFactory.openSession();
		CriteriaBuilder builder=session.getCriteriaBuilder();
		CriteriaQuery<UserRegistration> cquery=builder.createQuery(UserRegistration.class);
		Root<UserRegistration> root=cquery.from(UserRegistration.class);
		cquery.select(root).where(builder.equal(root.get("userrid"),userrid));  
		Query<UserRegistration> query=session.createQuery(cquery);
		UserRegistration upd1= query.getSingleResult();
		return upd1;
	}
	//===============================================================================================================//
	//===========================================================menu of payslip======================================//
	@Override
	public MonthlySalaryGenrate paySlipPost(MonthlySalaryGenrate monthlySalaryGenrate) {
		Session session=sessionFactory.openSession();
		Query<MonthlySalaryGenrate> query=session.createQuery("from MonthlySalaryGenrate where month=? and year=? and userRegistration_user_id=?");
		query.setParameter(0, monthlySalaryGenrate.getMonth());
		query.setParameter(1, monthlySalaryGenrate.getYear());
		query.setParameter(2,monthlySalaryGenrate.getUserRegistration().getUserrid());
		MonthlySalaryGenrate payslip=new MonthlySalaryGenrate();
		List<MonthlySalaryGenrate> l=query.getResultList();
		for(MonthlySalaryGenrate s:l) {
			payslip=s;
		}
		return payslip;
	}
	//===============================================================================================================//
	//=======================================change login password===================================================//
	@Override
	public int changepassword(Login login) {
		Session session=sessionFactory.openSession();
		session.beginTransaction();
		System.out.println("In dao"+login.getLogin_pass());
		Query query=session.createQuery("UPDATE Login set login_pass =:pass where login_id =:lid");
		query.setParameter("pass", login.getLogin_pass());
		query.setParameter("lid", login.getLogin_id());
		int login1	= query.executeUpdate();
		
		return login1;
	}
	//==============================================================================================================//
	//========================================get login password====================================================//
	@Override
	public boolean getpassword1(String password) {	
		Session session=sessionFactory.openSession();
		CriteriaBuilder builder=session.getCriteriaBuilder();
		CriteriaQuery<Login> cqCriteriaQuery=builder.createQuery(Login.class);
		Root<Login> root=cqCriteriaQuery.from(Login.class);
		cqCriteriaQuery.select(root);
		cqCriteriaQuery.where( builder.equal( root.get("login_pass"),password));
		Query<Login>query=session.createQuery(cqCriteriaQuery);		
	
		return query.getResultList().size() != 0;	
	}		
	//================================================================================================================//
}
