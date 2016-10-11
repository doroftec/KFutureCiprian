package it.kirey.kfuture.entity;
// Generated 03-Oct-2016 09:46:32 by Hibernate Tools 5.1.0.Beta1

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AmReportBookingBlobs generated by hbm2java
 */
@Entity
@Table(name = "AM_REPORT_BOOKING_BLOBS")
public class AmReportBookingBlobs implements java.io.Serializable {
	private static final long serialVersionUID = 1L;
	
	private Integer amReportBooking;
	
	@JsonBackReference
	private AmReportBookings amReportBookings;
	
	@JsonIgnore
	private AmUserAccounts amUserAccountsByUtInsert;
	
	@JsonIgnore
	private AmUserAccounts amUserAccountsByUtUpdate;
	private byte[] fileBlob;
	private Date tsInsert;
	private Date tsUpdate;

	public AmReportBookingBlobs() {
	}

	public AmReportBookingBlobs(AmReportBookings amReportBookings, AmUserAccounts amUserAccountsByUtInsert,
			AmUserAccounts amUserAccountsByUtUpdate, byte[] fileBlob, Date tsInsert, Date tsUpdate) {
		this.amReportBookings = amReportBookings;
		this.amUserAccountsByUtInsert = amUserAccountsByUtInsert;
		this.amUserAccountsByUtUpdate = amUserAccountsByUtUpdate;
		this.fileBlob = fileBlob;
		this.tsInsert = tsInsert;
		this.tsUpdate = tsUpdate;
	}

	@GenericGenerator(name = "generator", strategy = "foreign", parameters = @Parameter(name = "property", value = "amReportBookings"))
	@Id
	@GeneratedValue(generator = "generator")
	@Column(name = "AM_REPORT_BOOKING", unique = true, nullable = false, precision = 10, scale = 0)
	public Integer getAmReportBooking() {
		return this.amReportBooking;
	}

	public void setAmReportBooking(Integer amReportBooking) {
		this.amReportBooking = amReportBooking;
	}

	@OneToOne(fetch = FetchType.LAZY)
	@PrimaryKeyJoinColumn
	public AmReportBookings getAmReportBookings() {
		return this.amReportBookings;
	}

	public void setAmReportBookings(AmReportBookings amReportBookings) {
		this.amReportBookings = amReportBookings;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "UT_INSERT", nullable = false)
	public AmUserAccounts getAmUserAccountsByUtInsert() {
		return this.amUserAccountsByUtInsert;
	}

	public void setAmUserAccountsByUtInsert(AmUserAccounts amUserAccountsByUtInsert) {
		this.amUserAccountsByUtInsert = amUserAccountsByUtInsert;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "UT_UPDATE", nullable = false)
	public AmUserAccounts getAmUserAccountsByUtUpdate() {
		return this.amUserAccountsByUtUpdate;
	}

	public void setAmUserAccountsByUtUpdate(AmUserAccounts amUserAccountsByUtUpdate) {
		this.amUserAccountsByUtUpdate = amUserAccountsByUtUpdate;
	}
	
	@JsonIgnore
	@Lob
	@Column(name = "FILE_BLOB", nullable = false)
	public byte[] getFileBlob() {
		return this.fileBlob;
	}
	
	@JsonProperty
	public void setFileBlob(byte[] fileBlob) {
		this.fileBlob = fileBlob;
	}

	@Column(name = "TS_INSERT", nullable = false)
	public Date getTsInsert() {
		return this.tsInsert;
	}

	public void setTsInsert(Date tsInsert) {
		this.tsInsert = tsInsert;
	}

	@Column(name = "TS_UPDATE", nullable = false)
	public Date getTsUpdate() {
		return this.tsUpdate;
	}

	public void setTsUpdate(Date tsUpdate) {
		this.tsUpdate = tsUpdate;
	}

}
