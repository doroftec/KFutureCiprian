package it.kirey.kfuture.restController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import it.kirey.kfuture.dao.ITestClientsDao;
import it.kirey.kfuture.dao.impl.TestClientsDaoImpl;
import it.kirey.kfuture.entity.TestClients;

@RestController
public class TestClientsController {
	
	@Autowired
	private ITestClientsDao testClientsDao;

	 @RequestMapping(value = "/clients", method = RequestMethod.GET,headers="Accept=application/json")  
	 public List<TestClients> getAllTestClients()  
	 {  
	  List<TestClients> listOfTestClients = new ArrayList<TestClients>();  
	  listOfTestClients = testClientsDao.getAllTstClients();  
	  
	  return listOfTestClients;  
	 }  
	 
	 
	 @RequestMapping(value = "/client/{id}", method = RequestMethod.GET,headers="Accept=application/json")  
	 public TestClients getTestClientById(@PathVariable int id)  
	 {  
		 TestClients tstClient = testClientsDao.findTestClientsById(id);  
	  
	  return tstClient;  
	 } 
	 
	 @RequestMapping(value="/client/{id}", method=RequestMethod.DELETE, produces={"application/json"})
	 public List<TestClients> removeTestClientById(@PathVariable int id){
		 testClientsDao.removeTstClientById(id);
		 
		 return testClientsDao.getAllTstClients();
	 }
	 
	 @RequestMapping(value="/saveOrupdate/", method = RequestMethod.POST, consumes={MediaType.APPLICATION_JSON_VALUE}, headers="Accept=application/json", produces={MediaType.APPLICATION_JSON_VALUE})
	 public void saveOrUpdateTestClient(@RequestBody TestClients tstClient){
		 testClientsDao.saveOrUpdateTstClient(tstClient);
	 }
}
