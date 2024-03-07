package com.example.backend.services;
import com.example.backend.models.Product;
import java.util.List;

public interface ProductCatalogueService {
    void addProduct(Product product);

    void updateProduct(Product product);

    void deleteProduct(long productId);

    Product getProductById(long productId);

    List<Product> getAllProducts();

    Product createProduct(Product productDetails);

    Product updateProduct(Long productId, Product productDetails);
}
