package com.AdaptSportsApi.Service;

import com.AdaptSportsApi.Models.Usuario;

public interface UsuarioService {
	Usuario autenticate(String email, String senha);

	Usuario criarUsuario(Usuario user);

	void validarEmail(String email);
}
