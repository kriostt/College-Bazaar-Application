package com.example.backend.repository;

import com.example.backend.models.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NotificationRepositoy extends JpaRepository<Notification, Long> {
}
