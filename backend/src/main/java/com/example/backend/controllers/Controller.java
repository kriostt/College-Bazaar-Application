package com.example.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @RequestMapping("/productcatalogue")
    public String hello(){ return "Welcome to the ProductCatalogue";}

    @RequestMapping("/number")
    public int returnNumber(){ return 1;}
}
