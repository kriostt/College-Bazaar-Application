package com.example.backend.repository;

import com.example.backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// manages Product entities
@Repository // automatically detected and configured by Spring Data JPA
public interface IProductRepository extends JpaRepository<Product, Integer> {
    // provides CRUD operations for Product entity
}
