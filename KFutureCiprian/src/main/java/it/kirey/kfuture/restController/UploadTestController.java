package it.kirey.kfuture.restController;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import it.kirey.kfuture.dao.ITestFileUploadDao;
import it.kirey.kfuture.entity.TestFileUpload;

@RestController
@MultipartConfig
@RequestMapping(value = "/rest")
public class UploadTestController {
	
	@Autowired
	private ITestFileUploadDao testFileUploadDao;
	
	@RequestMapping(value = "/upload", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public void uploadFile(
            @RequestParam("file") MultipartFile  uploadedFileRef) {
	
    // Get name of uploaded file.
    String fileName = uploadedFileRef.getOriginalFilename();
    	
    TestFileUpload tstFileUp = new TestFileUpload();
    try {
		tstFileUp.setFileBlob(uploadedFileRef.getBytes());
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
    tstFileUp.setFileName(fileName);
    testFileUploadDao.saveOrUpdateFileUpload(tstFileUp);
    }
	
	@RequestMapping(value = "/uploadedFiles", method = RequestMethod.GET,headers="Accept=application/json")  
	 public List<TestFileUpload> getFiles()  
	 {  
	  List<TestFileUpload> listOfTestFiles = testFileUploadDao.getAllFileBlobs();
	  
	  return listOfTestFiles;
	 }
	
	@RequestMapping(value = "/downloadPDF/{id}", method = RequestMethod.GET, produces = "application/octet-stream")
    public HttpServletResponse getPDF(@PathVariable int id, HttpServletResponse response) {
    	
    	TestFileUpload testFiles = testFileUploadDao.findFileBlobById(id);

        try {
        	if(testFiles != null)
        	{
            // get your file as InputStream
            InputStream is = new ByteArrayInputStream(testFiles.getFileBlob());
            // copy it to response's OutputStream
            org.apache.commons.io.IOUtils.copy(is, response.getOutputStream());
            response.flushBuffer();
            
            return response;
        	}
        } catch (FileNotFoundException e) {
           System.err.println(e);
        } catch (IOException e) {
            System.err.println(e);
        }
        
        return null;
    }
	
}
