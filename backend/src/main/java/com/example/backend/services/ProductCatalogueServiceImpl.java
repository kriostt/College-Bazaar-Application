package com.example.backend.services;

import com.example.backend.models.Product;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class ProductCatalogueServiceImpl implements ProductCatalogueService {

    @Override
    public void addProduct(Product product) {

    }

    @Override
    public void updateProduct(Product product) {
    }

    @Override
    public void deleteProduct(long productId) {
    }
    @Override
    public Product getProductById(long productId) {
        return null;
    }
    @Override
    public List<Product> getAllProducts() {
    return null;
    }

    @Override
    public Product createProduct(Product productDetails) {
        return null;
    }

    @Override
    public Product updateProduct(Long productId, Product productDetails) {
        return null;
    }
}
