package br.com.dh.ecommerce.controllers;

import br.com.dh.ecommerce.dtos.ProductDto;
import br.com.dh.ecommerce.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/products")
public class ProductController {
    @Autowired
    ProductService service;

    @CrossOrigin(origins = "*")
    @GetMapping
    public ResponseEntity<List<ProductDto>> searchAllProducts() {
        List<ProductDto> list = service.searchAll();
        return ResponseEntity.ok().body(list);
    }

    @CrossOrigin(origins = "*")
    @GetMapping(value = "/{id}")
    public ResponseEntity<ProductDto> searchProductsById(@PathVariable Integer id) {
        ProductDto dto = service.searchById(id);
        return ResponseEntity.ok().body(dto);
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @CrossOrigin(origins = "*")
    @PostMapping
    public ResponseEntity<ProductDto> insertProduct(@RequestBody ProductDto dto) {
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @CrossOrigin(origins = "*")
    @PutMapping(value = "/{id}")
    public ResponseEntity<ProductDto> updateProduct(@PathVariable Integer id,  @RequestBody ProductDto dto) {
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }

}
