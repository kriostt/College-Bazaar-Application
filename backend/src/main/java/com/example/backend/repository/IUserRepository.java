package com.example.backend.repository;

import com.example.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository; // Importing JpaRepository interface from Spring Data JPA
import org.springframework.stereotype.Repository; // Importing Repository annotation from Spring Framework

@Repository // Indicates that this interface is a Spring Data repository
public interface IUserRepository extends JpaRepository<User, Integer>{
    // This interface extends JpaRepository, providing CRUD functionalities for User entity with primary key of type Integer
}
