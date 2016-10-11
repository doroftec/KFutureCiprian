package it.kirey.kfuture.service.impl;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import it.kirey.kfuture.dao.IAmUserAccountsHome;
import it.kirey.kfuture.entity.AmUserAccounts;
import it.kirey.kfuture.security.AuthenticationTokenProcessingFilter;
import it.kirey.kfuture.service.IUserService;
import it.kirey.kfuture.util.Utilities;

@Service(value=IUserService.SERVICE_QUALIFIER)
public class UserServiceImpl implements IUserService {
	
	private static final Logger LOGGER = Logger.getLogger(UserServiceImpl.class.getName());

	@Autowired
	private IAmUserAccountsHome amUserAccountsHome;

	@Override
	@Transactional
	public void saveOrUpdate(AmUserAccounts newUser) {
		amUserAccountsHome.attachDirty(newUser);
	}

	@Override
	@Transactional(readOnly=true)
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		return amUserAccountsHome.loadUserByUsername(username);
	}
	
	@Override
	@Transactional(readOnly=true)
	public AmUserAccounts getUserByUsername(String username) throws UsernameNotFoundException {
		return amUserAccountsHome.getUserByUsername(username);
	}
	
	@Override
	@Transactional(readOnly=true)
	@Cacheable("security")
	public AmUserAccounts getUserByToken(String token) throws UsernameNotFoundException {
		AmUserAccounts am = amUserAccountsHome.getUserByToken(token);
		return am;
	}

	@Override
	@Transactional(readOnly=true)
	public AmUserAccounts getById(Integer id) {
		return this.amUserAccountsHome.findById(id);
	}

	@Override
	@Transactional
	public void changeDefaultLanguage(String langCode) {
		AmUserAccounts user = Utilities.getUserFromContext();
		user.setDefaultLanguage(langCode);
		amUserAccountsHome.attachDirty(user);
	}

}
