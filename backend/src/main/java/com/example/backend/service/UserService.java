package com.example.backend.service;

import com.example.backend.entity.User;
import com.example.backend.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    IUserRepository repository;

    public Optional<User> getUserById(int id) {
        return repository.findById(id);
    }

    public String saveUser(User user) {
        repository.save(user);
        return "User Saved";
    }

    public User updateUser(int id, User updatedUser) {
        if (repository.existsById(id)) {
            updatedUser.setId(id);
            return repository.save(updatedUser);
        } else {
            return null;
        }
    }
}
