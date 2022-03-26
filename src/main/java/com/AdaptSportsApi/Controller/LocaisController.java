package com.AdaptSportsApi.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.AdaptSportsApi.DTO.LocaisDTO;
import com.AdaptSportsApi.Models.Locais;
import com.AdaptSportsApi.Service.LocaisService;
import com.AdaptSportsApi.Service.Exception.ValidateException;

@RestController
@RequestMapping(value = "/locais")
@CrossOrigin(origins = "http://localhost:3000")
public class LocaisController {

	private LocaisService service;

	public LocaisController(LocaisService service) {
		this.service = service;
	}

	@PostMapping
	public ResponseEntity save(@RequestBody LocaisDTO dto) {
		try {
			Locais entity = converter(dto);
			entity = service.save(entity);
			return ResponseEntity.ok(entity);
		} catch (ValidateException err) {
			return ResponseEntity.badRequest().body(null);
		}
	}

	private Locais converter(LocaisDTO dto) {
		Locais locais = new Locais();
		locais.setNome(dto.getNome());
		locais.setCidade(dto.getCidade());
		locais.setEstado(dto.getEstado());
		locais.setImg(dto.getImg());
		return locais;
	}

	@GetMapping
	public ResponseEntity search(@RequestParam(value = "nome", required = false) String nome,
			@RequestParam(value = "estado", required = false) String estado,
			@RequestParam(value = "cidade", required = false) String cidade,
			@RequestParam(value = "img", required = false) String img) {
		Locais locaisFilter = new Locais();
		locaisFilter.setNome(nome);
		locaisFilter.setEstado(estado);
		locaisFilter.setCidade(cidade);
		locaisFilter.setImg(img);

		List<Locais> locais = service.search(locaisFilter);
		return ResponseEntity.ok(locais);
	}

	@PutMapping("/{id}")
	public ResponseEntity update(@PathVariable Long id, @RequestBody LocaisDTO dto) {
		return service.getById(id).map(entity -> {
			try {
				Locais locais = converter(dto);
				locais.setId(entity.getId());
				service.update(locais);
				return ResponseEntity.ok(locais);
			} catch (Exception err) {
				return ResponseEntity.badRequest().body(null);
			}
		}).orElseGet(() -> new ResponseEntity("Local não encontrado", HttpStatus.BAD_REQUEST));

	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity delete(@PathVariable Long id) {
		return service.getById(id).map(entity -> {
			service.delete(entity);
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}).orElseGet(() -> new ResponseEntity("Local não encontrado", HttpStatus.BAD_REQUEST));

	}
}
