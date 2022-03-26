package com.AdaptSportsApi.Models;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Locais")
public class Locais {
	
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String nome;
	
	@Column
	private String estado;
	
	@Column
	private String cidade;
	
	@Column
	private String img;
	
	public Locais() {
	}

	public Locais(Long id, String nome, String estado, String cidade, String img) {
		super();
		this.id = id;
		this.nome = nome;
		this.estado = estado;
		this.cidade = cidade;
		this.img = img;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	@Override
	public int hashCode() {
		return Objects.hash(cidade, estado, id, img, nome);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Locais other = (Locais) obj;
		return Objects.equals(cidade, other.cidade) && Objects.equals(estado, other.estado)
				&& Objects.equals(id, other.id) && Objects.equals(img, other.img) && Objects.equals(nome, other.nome);
	}

	@Override
	public String toString() {
		return "Locais [id=" + id + ", nome=" + nome + ", estado=" + estado + ", cidade=" + cidade + ", img=" + img
				+ "]";
	}
	
	
}
