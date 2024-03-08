package com.example.backend.controller;

import com.example.backend.entity.User;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/user/{id}")
    public Optional<User> getUserById(@PathVariable int id) { return userService.getUserById(id);}

    @PostMapping("/save")
    public String saveUser(@RequestBody User user) { return userService.saveUser(user);}

    @PutMapping("/update/user/{id}")
    public User updateUserById(@PathVariable int id, @RequestBody User updatedUser) {
        return userService.updateUser(id, updatedUser);
    }
}
