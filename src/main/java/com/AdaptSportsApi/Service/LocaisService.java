package com.AdaptSportsApi.Service;

import java.util.List;
import java.util.Optional;

import com.AdaptSportsApi.Models.Locais;

public interface LocaisService {
	Locais save(Locais locais);
	Locais update(Locais locais);
	void delete(Locais locais);
	List<Locais> search(Locais LocaisFilter);
	Optional<Locais> getById(Long id);
}
