package com.banhang.backend.User;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryU extends JpaRepository<EntityU, Long>{
    List<EntityU> findByUsername(String username); // findBy + thuoc tinh muon tim kiem cua EntityU
}