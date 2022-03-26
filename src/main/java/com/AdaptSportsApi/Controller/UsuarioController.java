package com.AdaptSportsApi.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.AdaptSportsApi.DTO.UsuarioDTO;
import com.AdaptSportsApi.Models.Usuario;
import com.AdaptSportsApi.Service.UsuarioService;
import com.AdaptSportsApi.Service.Exception.NoAuthException;

@RestController
@RequestMapping(value = "/login")
@CrossOrigin(origins = "http://localhost:3000")
public class UsuarioController {

	private UsuarioService service;

	public UsuarioController(UsuarioService service) {
		this.service = service;
	}

	@PostMapping("/auth")
	public ResponseEntity auth(@RequestBody UsuarioDTO dto) {
		try {
			Usuario userAuthentication = service.autenticate(dto.getEmail(), dto.getSenha());

			return ResponseEntity.ok(userAuthentication);
		} catch (NoAuthException err) {
			return ResponseEntity.badRequest().body(err.getMessage());
		}
	}

	@PostMapping
	public ResponseEntity save(@RequestBody UsuarioDTO dto) {
		Usuario usuario = new Usuario();
		usuario.setEmail(dto.getEmail());
		usuario.setNome(dto.getNome());
		usuario.setSenha(dto.getSenha());
		try {
			Usuario usuarioSave = service.criarUsuario(usuario);
			return new ResponseEntity(usuarioSave, HttpStatus.CREATED);
		} catch (Exception err) {
			return ResponseEntity.badRequest().body(err.getMessage());
		}
	}
	
}
