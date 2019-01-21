package com.alighthub.employeepayrollservice.daoimpl;


import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.alighthub.employeepayrollservice.dao.EmployeePayRollServiceDao;
import com.alighthub.employeepayrollservice.model.Login;
import com.alighthub.employeepayrollservice.model.MonthlySalaryGenrate;
import com.alighthub.employeepayrollservice.model.MonthlySalaryGenrate1;
import com.alighthub.employeepayrollservice.model.SalarySlipStructure;
import com.alighthub.employeepayrollservice.model.AdminRegistration;
import com.alighthub.employeepayrollservice.model.EmployeeRegistration;
import com.alighthub.employeepayrollservice.model.SalarySlipStructure1;
import com.alighthub.employeepayrollservice.model.UserRegistration;

@Repository
public class EmployeePayRollServiceDaoImli implements EmployeePayRollServiceDao{

	
	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public Login checkLogin(Login login) {
		Session session=sessionFactory.openSession();
		CriteriaBuilder builder=session.getCriteriaBuilder();
		CriteriaQuery<Login> cqCriteriaQuery=builder.createQuery(Login.class);
		Root<Login> root=cqCriteriaQuery.from(Login.class);
		
		cqCriteriaQuery.select(root);
		cqCriteriaQuery.where( builder.equal( root.get("login_id"),login.getLogin_id()),builder.equal(root.get("login_pass"),login.getLogin_pass()));
			Query<Login>query=session.createQuery(cqCriteriaQuery);
			Login list=query.getSingleResult();
			return list;
	}

	@Override
	public void adminRegisterCheck(AdminRegistration newAdminRegistration) {
		Session session=sessionFactory.openSession();
		session.save(newAdminRegistration);
		session.beginTransaction().commit();
	}

	@Override
	public void employeeRegistration(EmployeeRegistration employeeRegistration,SalarySlipStructure1 salarySlipStructure) {
		Session session=sessionFactory.openSession();
		session.save(salarySlipStructure);
		session.save(employeeRegistration);
		session.beginTransaction().commit();
	}

	@Override
	public SalarySlipStructure1 employeSalaryStructure(int id) {
		
		System.out.println("************************************************************************Dao");
		Session session=sessionFactory.openSession();
		
		Query<SalarySlipStructure1> query = session.createQuery("from SalarySlipStructure1 where employeeRegistration_Employee_id=?");
		query.setParameter(0, id);
		SalarySlipStructure1 list = query.getSingleResult();
		
		System.out.println("hi");
		return list;
	}
	
	//**************************************************************************
	
public List<EmployeeRegistration> getAllEmployee(){
		
		Session session=sessionFactory.openSession();
		Criteria criteria =session.createCriteria(EmployeeRegistration.class);
		List<EmployeeRegistration> list= criteria.list();
       	return	list;
	}
	


public List<AdminRegistration> adminProfileDisplay(int id) {
	
	Session session =sessionFactory.openSession();
	Query<AdminRegistration> query=session.createQuery("from AdminRegistration where admin_id=?");
	    query.setParameter(0, id);
	   
  List <AdminRegistration>  a=query.list();
     return a;
	
}

public SalarySlipStructure1 getEmployeeSalarySlipStructure(int i)
		{   
	          
	        SalarySlipStructure1 salarySlipStructure1=new SalarySlipStructure1();
			Session session= sessionFactory.openSession();
			Query<SalarySlipStructure1> query=session.createQuery("from SalarySlipStructure1  where employeeRegistration_Employee_id=? ");
			query.setParameter(0, i);
			salarySlipStructure1 = query.getSingleResult();
	    
			return salarySlipStructure1;  
		}
	
public void createEmployeeMonthlysalary(MonthlySalaryGenrate1 monthlySalaryGenrate1) {

	        Session session =sessionFactory.openSession();
			EmployeeRegistration employeeRegistration=session.get(EmployeeRegistration.class, monthlySalaryGenrate1.getMonthelySalaryId());
			Login login=session.get(Login.class, monthlySalaryGenrate1.getMonthelySalaryId());
			employeeRegistration.setLogin(login);
			System.out.println(employeeRegistration);
			System.out.println(monthlySalaryGenrate1);

			monthlySalaryGenrate1.setEmployeeRegistration(employeeRegistration);
			monthlySalaryGenrate1.setMonthelySalaryId(0);
			System.out.println(monthlySalaryGenrate1);
			session.saveOrUpdate(monthlySalaryGenrate1);
			session.beginTransaction().commit();	      
			      
	        }
	
		public MonthlySalaryGenrate1 getpayslipdata(MonthlySalaryGenrate1 monthlysalryslipdata) {
					Session   session1 =sessionFactory.openSession();
		    		Query<MonthlySalaryGenrate1> query=session1.createQuery
		    		("from MonthlySalaryGenrate1 where monthelySalaryId=?");
		    		query.setParameter(0,monthlysalryslipdata.getMonthelySalaryId());
		    		MonthlySalaryGenrate1 msd =query.getSingleResult();
		 
		    			return msd;
				}

				
				@Override
				public EmployeeRegistration getEmployee(int employeeId)
				{
					Session session=sessionFactory.openSession();
					EmployeeRegistration employeeregistration=session.get(EmployeeRegistration.class,employeeId);
					
					
					return employeeregistration;
				}
				public int updateemployee(EmployeeRegistration employeeregistration)
				{
					Session session=sessionFactory.openSession();
					session.update(employeeregistration);
					Transaction ts=session.beginTransaction();
					ts.commit();
					session.close();
					return 1;
					
				}
				
				@Override
				public int deleteEmployee(int employeeId) 
				{
					
					System.out.println("dao-delete");
							Session session=sessionFactory.openSession();
							//Transaction ts = session.beginTransaction();
							EmployeeRegistration employeeregistration=session.get(EmployeeRegistration.class,employeeId);
							
							session.delete(employeeregistration);
							
							session.beginTransaction().commit();
							//ts.commit();
							session.close();
							return 1;
					
				}
					
	
	
	
	
}
