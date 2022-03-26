package com.AdaptSportsApi.Service.Impl;

import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.AdaptSportsApi.Models.Usuario;
import com.AdaptSportsApi.Repository.UsuarioRepository;
import com.AdaptSportsApi.Service.UsuarioService;
import com.AdaptSportsApi.Service.Exception.NoAuthException;
import com.AdaptSportsApi.Service.Exception.ValidateException;

@Service
public class UsuarioServiceImpl implements UsuarioService{

	private UsuarioRepository repo;
	
	public UsuarioServiceImpl(UsuarioRepository repo) {
		super();
		this.repo = repo;
	}

	@Override
	public Usuario autenticate(String email, String senha) {
		Optional<Usuario> usuario = repo.findByEmail(email);
		if(!usuario.isPresent()) {
			throw new NoAuthException("Usuário Não Encontrado");
		}
		
		if(!usuario.get().getSenha().equals(senha)) {
			throw new NoAuthException("Senha Incorreta");
		}
		return usuario.get();
	}

	@Override
	@Transactional
	public Usuario criarUsuario(Usuario usuario) {
		validarEmail(usuario.getEmail());
		return repo.save(usuario);
	}

	@Override
	public void validarEmail(String email) {
		boolean exists = repo.existsByEmail(email);
		if(exists) {
			throw new ValidateException("O usuário já existe, por favor verifique suas informações.");
		}
		
	}
}
