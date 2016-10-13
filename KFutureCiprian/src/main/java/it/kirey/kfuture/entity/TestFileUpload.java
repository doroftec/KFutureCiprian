package it.kirey.kfuture.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import net.minidev.json.annotate.JsonIgnore;

@Entity
@Table(name = "TEST_FILE_UPLOAD")
public class TestFileUpload {

	private int id;

	private byte[] fileBlob;
	
	private String fileName;
	
	@Id
	@GeneratedValue
	@Column(name = "ID", unique = true, nullable = false)
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	@Lob
	@Column(name = "FILE_BLOB", nullable = false)
	public byte[] getFileBlob() {
		return fileBlob;
	}
	
	public void setFileBlob(byte[] fileBlob) {
		this.fileBlob = fileBlob;
	}
	
	@Column(name = "FILE_NAME", nullable = false)
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
}
