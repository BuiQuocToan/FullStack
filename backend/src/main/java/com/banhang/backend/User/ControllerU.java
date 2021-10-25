package com.banhang.backend.User;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping(path = "/api/v1/User")
public class ControllerU {
    @Autowired
    RepositoryU repository;

    @GetMapping("")
    List <EntityU> getAll(){
        return repository.findAll();
    }

    @GetMapping("/{id}")
    Optional<EntityU> getById(@PathVariable Long id){
        Optional<EntityU> entity = repository.findById(id);
        return entity;
        //ResponseEntity.status(HttpStatus.OK).body(new ResponseO("OK", "Find Success", entity));
        //Khong dung kieu tra ve ResponseEntity<ResponseO> duoc vi frontend lay cac thuoc tinh cua entityU
    }

    @PostMapping("/insert")
    ResponseEntity<ResponseO> insert(@RequestBody EntityU entity){
        List<EntityU> found = repository.findByUsername(entity.getUsername().trim());
        return found.size()>0?
            ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(new ResponseO("Failed", "The name already taken", "")):
            ResponseEntity.status(HttpStatus.OK).body(new ResponseO("OK", "Insert Success", repository.save(entity)));
    }
    @PutMapping("/{id}")
    ResponseEntity<ResponseO> update (@RequestBody EntityU entity, @PathVariable Long id){
    //EntityU update (@RequestBody EntityU entity, @PathVariable Long id){

         EntityU entityU = repository.findById(id)
        .map(mapper -> {
            mapper.setFullname(entity.getFullname());
            mapper.setUsername(entity.getUsername());
            mapper.setPassword(entity.getPassword());
            mapper.setRole(entity.getRole());
            mapper.setAvatar(entity.getAvatar());
            return repository.save(mapper);
        }).orElseGet(() -> {
            entity.setId(id);
            return repository.save(entity);
        });
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseO("OK", "Update Product Success", entityU));
    }
    @DeleteMapping("/{id}")
    ResponseEntity<ResponseO> delete(@PathVariable Long id){
        System.out.println(repository.existsById(id));
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseO("OK", "Delete Success",""));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseO("Failed", "Can not find entity to delete", ""));
    }
}
