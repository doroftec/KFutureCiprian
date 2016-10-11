package it.kirey.kfuture.dao.impl;

import java.util.List;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import it.kirey.kfuture.dao.ITestClientsDao;
import it.kirey.kfuture.entity.TestClients;

/**
 * Home object for domain model class TestClients.
 * @see .TestClients
 * @author Hibernate Tools
 */
@Repository(ITestClientsDao.SPRING_QUALIFIER)
@Transactional
public class TestClientsDaoImpl implements ITestClientsDao{

	private static final Log log = LogFactory.getLog(TestClientsDaoImpl.class);
	
	@Autowired
	private SessionFactory sessionFactory;
	
	@SuppressWarnings("unchecked")
	@Override
	public List<TestClients> getAllTstClients(){
		return (List<TestClients>)sessionFactory.getCurrentSession().createCriteria(TestClients.class).list();
	}

	@Override
	public void saveOrUpdateTstClient(TestClients tstClient) {
		sessionFactory.getCurrentSession().saveOrUpdate(tstClient);
		
	} 
	
	@Override
	public TestClients findTestClientsById(int testClientId) {
		return (TestClients) sessionFactory.getCurrentSession().createCriteria(TestClients.class)
				.add(Restrictions.eq("id", testClientId)).uniqueResult();

	}
	
	@Override
	public void removeTstClient(TestClients tstClient) {
		sessionFactory.getCurrentSession().delete(tstClient);
	}
	
	@Override
	public void removeTstClientById(int tstClientId) {
		TestClients tstClient = this.findTestClientsById(tstClientId);
		this.removeTstClient(tstClient);
	}
}
