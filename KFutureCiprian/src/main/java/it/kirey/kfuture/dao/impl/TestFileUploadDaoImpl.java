package it.kirey.kfuture.dao.impl;

import java.util.Collections;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.ProjectionList;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import it.kirey.kfuture.dao.ITestFileUploadDao;
import it.kirey.kfuture.dto.UploadTestFilesDto;
import it.kirey.kfuture.entity.TestFileUpload;

@Repository(ITestFileUploadDao.SPRING_QUALIFIER)
@Transactional
public class TestFileUploadDaoImpl implements ITestFileUploadDao{
	
	private static final Log log = LogFactory.getLog(TestFileUploadDaoImpl.class);
	
	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public void saveOrUpdateFileUpload(TestFileUpload testFileUpload) {
		sessionFactory.getCurrentSession().saveOrUpdate(testFileUpload);
	}

	@Override
	public List<TestFileUpload> getAllFileBlobs() {
		return (List<TestFileUpload>)sessionFactory.getCurrentSession().createCriteria(TestFileUpload.class).list();
	}
	
	@Override
	public List<UploadTestFilesDto> getAllFilesNames() {
		ProjectionList projList = Projections.projectionList();
		projList.add(Projections.property("t.id"), "Id");
		projList.add(Projections.property("t.fileName"), "fileName");
		return sessionFactory.getCurrentSession().createCriteria(TestFileUpload.class, "t").setProjection(Projections.distinct(projList)).setResultTransformer(Transformers.aliasToBean(UploadTestFilesDto.class)).list();
	}

	@Override
	public TestFileUpload findFileBlobById(int fileUploadId) {
		return (TestFileUpload) sessionFactory.getCurrentSession().createCriteria(TestFileUpload.class)
				.add(Restrictions.eq("id", fileUploadId)).uniqueResult();
	}

	@Override
	public void removeFileUpload(TestFileUpload testFileUpload) {
		sessionFactory.getCurrentSession().delete(testFileUpload);
	}

	@Override
	public void removeFileUploadById(int fileUploadId) {}

}
