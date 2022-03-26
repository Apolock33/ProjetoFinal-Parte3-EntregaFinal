package com.AdaptSportsApi.Service.Impl;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.ExampleMatcher.StringMatcher;
import org.springframework.stereotype.Service;

import com.AdaptSportsApi.Models.Locais;
import com.AdaptSportsApi.Repository.LocaisRepository;
import com.AdaptSportsApi.Service.LocaisService;

@Service
public class LocaisServiceImpl implements LocaisService{

	private LocaisRepository repo;
	
	public LocaisServiceImpl(LocaisRepository repo) {
		this.repo = repo;
	}
	
	@Override
	@Transactional
	public Locais save(Locais locais) {
		
		return repo.save(locais);
	}

	@Override
	@Transactional
	public Locais update(Locais locais) {
		Objects.requireNonNull(locais.getId());
		return repo.save(locais);
	}

	@Override
	@Transactional
	public void delete(Locais locais) {
		// TODO Auto-generated method stub
		Objects.requireNonNull(locais.getId());
		repo.delete(locais);
	}

	@Override
	@Transactional
	public List<Locais> search(Locais LocaisFilter) {
		Example example = Example.of(LocaisFilter,ExampleMatcher.matching()
				.withIgnoreCase().withStringMatcher(StringMatcher.CONTAINING));
				return repo.findAll(example);
	}

	@Override
	@Transactional
	public Optional<Locais> getById(Long id) {
		// TODO Auto-generated method stub
		return repo.findById(id);
	}
	
}
