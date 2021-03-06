package it.kirey.kfuture.entity;
// Generated 23-Sep-2016 13:33:51 by Hibernate Tools 5.1.0.Beta1

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonBackReference;


/**
 * AmResourceBundle generated by hbm2java
 */
@Entity
@Table(name = "AM_RESOURCE_BUNDLE", uniqueConstraints = @UniqueConstraint(columnNames = { "GENERIC_NAME", "LANGUAGE" }))
public class AmResourceBundle implements java.io.Serializable {
	private static final long serialVersionUID = 318830085723122114L;

	private Integer id;
	
	@JsonBackReference
	private AmDictionary amDictionary;
	private String language;
	private String translation;

	public AmResourceBundle() {
	}

	public AmResourceBundle(Integer id, AmDictionary amDictionary, String language, String translation) {
		this.id = id;
		this.amDictionary = amDictionary;
		this.language = language;
		this.translation = translation;
	}

	@Id
	@SequenceGenerator(name = "rb_gen", sequenceName = "SEQ_AM_RESOURCE_BUNDLE", allocationSize = 1, initialValue = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "rb_gen")
	@Column(name = "ID", unique = true, nullable = false, precision = 10, scale = 0)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@ManyToOne
	@JoinColumn(name = "GENERIC_NAME", nullable = false)
	public AmDictionary getAmDictionary() {
		return this.amDictionary;
	}

	public void setAmDictionary(AmDictionary amDictionary) {
		this.amDictionary = amDictionary;
	}

	@Column(name = "LANGUAGE", nullable = false, length = 10)
	public String getLanguage() {
		return this.language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	@Column(name = "TRANSLATION", nullable = false, length = 4000)
	public String getTranslation() {
		return this.translation;
	}

	public void setTranslation(String translation) {
		this.translation = translation;
	}

}
