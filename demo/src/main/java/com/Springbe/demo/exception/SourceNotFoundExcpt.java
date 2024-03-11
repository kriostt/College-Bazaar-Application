package com.Springbe.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class SourceNotFoundExcpt extends RuntimeException
{
    public SourceNotFoundExcpt(String message){
        super(message);
    }
}
