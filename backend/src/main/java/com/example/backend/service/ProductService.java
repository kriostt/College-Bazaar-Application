package com.example.backend.service;

import com.example.backend.entity.Product;
import com.example.backend.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

// handles business logic related to Product entities
@Service
public class ProductService {
    // automatic injection of IProductRepository instance
    @Autowired
    private IProductRepository repository;

    // retrieve all products
    public List<Product> getAllProducts() { return repository.findAll(); }

    // retrieve products with a specific category
    public List<Product> getProductsByCategory(String category) {
        // retrieve all products
        List<Product> products = getAllProducts();

        // initialize list to store found products
        List<Product> foundProducts = new ArrayList<>();

        // iterate through each product to check if they belong to category
        for (Product p : products) {
            if (p.getCategory().contains(category)) {
                foundProducts.add(p);
            }
        }

        // return list of products with matching category
        return foundProducts;
    }
}
