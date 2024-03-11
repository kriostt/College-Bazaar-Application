package com.Springbe.demo.controller;

import com.Springbe.demo.model.bazaarUsr;
import com.Springbe.demo.repository.StudUsrRepo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
@AllArgsConstructor
@RestController
@RequestMapping("/api/bazaarUsers")
public class bazaarUsrCtrl
{
    @Autowired
    private StudUsrRepo studUsrRepo;
    @GetMapping
    public List<bazaarUsr> getAllbazaarUsr()
    {
        return studUsrRepo.findAll();
    }


    //build create bazzar User
    @CrossOrigin
    @PostMapping
    public bazaarUsr createBazaarUsr(@RequestBody bazaarUsr user)
    {
        return studUsrRepo.save(user);
    }




    //build get bazaar User by usrID
    @GetMapping("{id}")
    public ResponseEntity<bazaarUsr> getBazaarUsrById(@PathVariable long id)
    {
            bazaarUsr usr = studUsrRepo.findById(id)
                    .orElseThrow(() -> new RuntimeException("Employee not exist with id:"+id));
            return ResponseEntity.ok(usr);
    }


//    @GetMapping("/api/bazaarUsers/searchStud/{studentId}")
//    public ResponseEntity<bazaarUsr> getBazaarUsrByStudentId(@PathVariable String studentId) {
//        bazaarUsr usr = studUsrRepo.findByStudentId(studentId)
//                .orElseThrow(() -> new RuntimeException("User not found with student ID: " + studentId));
//        return ResponseEntity.ok(usr);
//    }


    //build update bazaar User
//    @PutMapping("{id}")
//    public ResponseEntity<bazaarUsr> updateBazaarUserById(@PathVariable long id,@RequestBody bazaarUsr usrDetails) {
//        // Find the user by id
//        bazaarUsr updateUser = studUsrRepo.findById(id).orElseThrow(() -> new RuntimeException("Employee not exist with id:"+id));
//
//        // Update the user details
//        updateUser.setFname(usrDetails.getFname());
//        updateUser.setLname(usrDetails.getLname());
//        updateUser.setAddress(usrDetails.getAddress());
//        updateUser.setZipcode(usrDetails.getZipcode());
//        updateUser.setEmail(usrDetails.getEmail());
//        updateUser.setPhoneNumber(usrDetails.getPhoneNumber());
//        updateUser.setStudentId(usrDetails.getStudentId());
//        updateUser.setPassword(usrDetails.getPassword());
//
//        // Save the updated user
//        bazaarUsr updatedUser = studUsrRepo.save(updateUser);
//
//        // Return response with updated user
//        return ResponseEntity.ok(updatedUser);
//    }

    // build delete Bazaar User by id
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteBazaarUserById(@PathVariable long id)
    {
         bazaarUsr usr = studUsrRepo.findById(id)
                 .orElseThrow(() -> new RuntimeException("Employee not exist with id:"+id));
         studUsrRepo.delete(usr);
         return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
