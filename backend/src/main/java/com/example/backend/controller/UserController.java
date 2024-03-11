package com.example.backend.controller;

import com.example.backend.entity.User;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController // Indicates that this class is a controller and the methods return JSON responses
public class UserController {

    @Autowired
    UserService userService;

    // Endpoint to save a new user
    @PostMapping("/save")
    public String saveUser(@RequestBody User user) {
        return userService.saveUser(user); // Delegate the saving operation to the UserService
    }

    // Endpoint to retrieve a user by ID
    @GetMapping("/user/{id}")
    public Optional<User> getUserById(@PathVariable int id) {
        return userService.getUserById(id);  // Delegate the retrieval operation to the UserService
    }

    // Endpoint to update a user by ID
    @PutMapping("/user/{id}")
    public User updateUserById(@PathVariable int id, @RequestBody User updatedUser) {
        return userService.updateUser(id, updatedUser); // Delegate the update operation to the UserService
    }
}
