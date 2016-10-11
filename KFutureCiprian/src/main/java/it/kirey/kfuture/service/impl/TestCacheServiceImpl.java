package it.kirey.kfuture.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import it.kirey.kfuture.dao.ITestCacheDao;
import it.kirey.kfuture.entity.AmErrorLogs;
import it.kirey.kfuture.service.ITestCacheService;

@Service(value=ITestCacheService.SERVICE_QUALIFIER)
public class TestCacheServiceImpl implements ITestCacheService{

	@Autowired
	ITestCacheDao testCacheDao;
	
	@Cacheable(value = "testCache")
	@Override
	@Transactional
	public List<AmErrorLogs> getAllErrorLogs() {
		List<AmErrorLogs> logs = testCacheDao.getAllErrorLogs();
		 return logs;
	}

	@CacheEvict(value = "testCache", allEntries=true )
	@Override
	@Transactional
	public void cacheEvict() {
		testCacheDao.cacheEvict();
	}

}
