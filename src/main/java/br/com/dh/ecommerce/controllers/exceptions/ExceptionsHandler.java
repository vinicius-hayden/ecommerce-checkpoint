package br.com.dh.ecommerce.controllers.exceptions;

import br.com.dh.ecommerce.services.exceptions.DatabaseException;
import br.com.dh.ecommerce.services.exceptions.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;
import java.time.Instant;

@ControllerAdvice
public class ExceptionsHandler {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<DefaultError> entityNotFound(EntityNotFoundException e, HttpServletRequest request) {

        HttpStatus status = HttpStatus.NOT_FOUND;
        DefaultError error = new DefaultError();
        error.setTimestamp(Instant.now());
        error.setStatus(status.value());
        error.setError("REGISTER NOT FOUND");
        error.setMsg(e.getMessage());
        error.setPathway(request.getRequestURI());
        return ResponseEntity.status(status).body(error);
    }

    @ExceptionHandler(DatabaseException.class)
    public ResponseEntity<DefaultError> integrityViolation(DatabaseException e, HttpServletRequest request) {

        HttpStatus status = HttpStatus.BAD_REQUEST;
        DefaultError error = new DefaultError();
        error.setTimestamp(Instant.now());
        error.setStatus(status.value());
        error.setError("INTEGRITY VIOLATION (FOREIGN KEY)");
        error.setMsg(e.getMessage());
        error.setPathway(request.getRequestURI());
        return ResponseEntity.status(status).body(error);
    }
}
