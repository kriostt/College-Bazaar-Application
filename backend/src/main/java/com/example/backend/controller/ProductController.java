package com.example.backend.controller;

import com.example.backend.entity.Product;
import com.example.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// handle HTTP requests related to Product entities
@RestController
public class ProductController {
    // automatic injection of ProductService instance
    @Autowired
    ProductService productService;

    // handles HTTP GET request to retrieve all products
    @GetMapping("/shop")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    // handles HTTP GET request to retrieve products based on category
    @GetMapping("/products/category")
    public List<Product> getProductsByCategory(@RequestParam String category) {
        return productService.getProductsByCategory(category);
    }
}
