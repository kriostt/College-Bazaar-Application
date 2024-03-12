package com.example.backend.services;

import com.example.backend.models.Product;
import com.example.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductCatalogueServiceImpl implements ProductCatalogueService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductCatalogueServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Product createProduct(Product productDetails) {
        return productRepository.save(productDetails);
    }

    @Override
    public void addProduct(Product product) {
        productRepository.save(product);
    }

    @Override
    public void updateProduct(Product product) {
        productRepository.save(product);
    }

    @Override
    public void deleteProduct(long productId) {
        productRepository.deleteById(productId);
    }

    @Override
    public Product getProductById(long productId) {
        Optional<Product> optionalProduct = productRepository.findById(productId);
        return optionalProduct.orElse(null);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product updateProduct(Long productId, Product productDetails) {
        Optional<Product> optionalProduct = productRepository.findById(productId);
        if (optionalProduct.isPresent()) {
            Product existingProduct = optionalProduct.get();
            existingProduct.setName(productDetails.getName());
            existingProduct.setDescription(productDetails.getDescription());
            existingProduct.setPrice(productDetails.getPrice());
            existingProduct.setCategory(productDetails.getCategory());
            existingProduct.setCondition(productDetails.getCondition());
            existingProduct.setSellerUsername(productDetails.getSellerUsername());
            existingProduct.setDatePosted(productDetails.getDatePosted());
            existingProduct.setSpecifications(productDetails.getSpecifications());
            existingProduct.setAdditionalImages(productDetails.getAdditionalImages());
            return productRepository.save(existingProduct);
        } else {
            return null;
        }
    }
}
