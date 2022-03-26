package com.AdaptSportsApi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.AdaptSportsApi.Models.Locais;

@Repository
public interface LocaisRepository extends JpaRepository<Locais, Long>{
	
}
