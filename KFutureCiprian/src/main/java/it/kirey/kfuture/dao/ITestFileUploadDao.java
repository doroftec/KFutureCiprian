package it.kirey.kfuture.dao;

import java.util.List;

import it.kirey.kfuture.dto.UploadTestFilesDto;
import it.kirey.kfuture.entity.TestFileUpload;

public interface ITestFileUploadDao {

	public static final String SPRING_QUALIFIER = "testFileUploadDao";

	public void saveOrUpdateFileUpload(TestFileUpload testFileUpload);
	
	public List<TestFileUpload> getAllFileBlobs();
	
	public List<UploadTestFilesDto> getAllFilesNames();
	
	public TestFileUpload findFileBlobById(int fileBlobId);
	
	public void removeFileUpload(TestFileUpload testFileUpload);
	
	public void removeFileUploadById(int fileUploadId);
}
