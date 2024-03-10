package com.example.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// represents product
@Entity // annotated as Entity for database persistence
@Data // automatically generates getters and setters
@NoArgsConstructor // automatically generates no argument constructor
@AllArgsConstructor // automatically generates all arguments constructor
public class Product {
    // primary key for Product entity
    @Id
    private int id;

    // product name
    private String name;

    // product description
    private String description;

    // product category
    private String category;

    // product price
    private double price;
}
