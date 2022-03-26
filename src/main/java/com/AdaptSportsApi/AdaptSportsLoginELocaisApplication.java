package com.AdaptSportsApi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableWebMvc
@SpringBootApplication
public class AdaptSportsLoginELocaisApplication implements WebMvcConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(AdaptSportsLoginELocaisApplication.class, args);
	}
	
	public void addCorsMapping(CorsRegistry registry) {
		registry.addMapping("/**").allowedMethods("GET","POST","PUT","DELETE");
	}

}
