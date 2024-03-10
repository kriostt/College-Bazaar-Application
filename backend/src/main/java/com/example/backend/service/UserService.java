package com.example.backend.service;

import com.example.backend.entity.User;
import com.example.backend.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;  // Importing Autowired annotation from Spring Framework
import org.springframework.stereotype.Service; // Importing Service annotation from Spring Framework

import java.util.Optional; // Importing Optional class from Java Util package

@Service // Indicates that this class is a service component in the Spring application context
public class UserService {

    @Autowired
    IUserRepository repository;

    // Method to save a user
    public String saveUser(User user) {
        repository.save(user); // Save the user using the repository
        return "User Saved";
    }

    // Method to get a user by ID
    public Optional<User> getUserById(int id) {
        return repository.findById(id); // Retrieve the user by ID using the repository
    }

    // Method to update a user by ID
    public User updateUser(int id, User updatedUser) {
        if (repository.existsById(id)) { // Check if the user with the given ID exists
            updatedUser.setId(id); // Set the ID of the updated user
            return repository.save(updatedUser); // Save the updated user using the repository
        } else {
            return null; // Return null if the user with the given ID doesn't exist
        }
    }
}
