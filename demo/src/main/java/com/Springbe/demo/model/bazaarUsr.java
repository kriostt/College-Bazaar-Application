package com.Springbe.demo.model;
import jakarta.persistence.*;
import lombok.Data;
@Entity
@Data
@Table(name="bazaarUsr")
public class bazaarUsr
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long usrID;

    @Column(name = "fname")
    private String fname;

    @Column(name = "lname")
    private String lname;

//    @Column(name = "address")
//    private String address;
//
//    @Column(name = "zipcode")
//    private String zipcode;

    @Column(name = "email")
    private String email;

    @Column(name = "phoneNumber")
    private String phoneNumber;

    @Column(name = "studentId")
    private String studentId;

    @Column(name = "password")
    private String password;

    @Column(name = "imgurl")
    private String imgurl;
}
