package com.AdaptSportsApi.DTO;

import java.util.Objects;

public class LocaisDTO {
	
	private Long id;
	private String nome;
	private String estado;
	private String cidade;
	private String img;
	
	public LocaisDTO() {
	}

	public LocaisDTO(Long id, String nome, String estado, String cidade, String img) {
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
		LocaisDTO other = (LocaisDTO) obj;
		return Objects.equals(cidade, other.cidade) && Objects.equals(estado, other.estado)
				&& Objects.equals(id, other.id) && Objects.equals(img, other.img) && Objects.equals(nome, other.nome);
	}

	@Override
	public String toString() {
		return "LocaisDTO [id=" + id + ", nome=" + nome + ", estado=" + estado + ", cidade=" + cidade + ", img=" + img
				+ "]";
	}
	
	
	
}
