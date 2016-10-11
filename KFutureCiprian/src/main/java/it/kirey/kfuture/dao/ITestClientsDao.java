package it.kirey.kfuture.dao;

import java.util.List;

import it.kirey.kfuture.entity.TestClients;

public interface ITestClientsDao {
	
	public static final String SPRING_QUALIFIER = "testClientsDao";

	public void saveOrUpdateTstClient(TestClients tstClient);
	
	public List<TestClients> getAllTstClients();
	
	public TestClients findTestClientsById(int testClientId);
	
	public void removeTstClient(TestClients tstClient);
	
	public void removeTstClientById(int tstClientId);
}
