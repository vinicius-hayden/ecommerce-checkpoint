package br.com.dh.ecommerce.repositories;

import br.com.dh.ecommerce.entities.Product;
import br.com.dh.ecommerce.tests.Factory;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.EmptyResultDataAccessException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@DataJpaTest
public class ProductRepositoryTest {

    @Autowired
    private ProductRepository repository;

    private Integer existentId;
    private Integer nonExistentId;
    private Integer countTotalProducts;
    private List<Product> productList;

    @BeforeEach
    void setup() throws Exception {
        existentId = 1;
        nonExistentId = 99;
        countTotalProducts = 3;
        productList = new ArrayList<>();
    }

    @Test
    public void saveShouldSaveWithAutoIncrementWhenIdIsNull() {
        Product product = Factory.createProduct();
        product = repository.save(product);
        Assertions.assertNotNull(product.getId());
        Assertions.assertEquals(countTotalProducts + 1, product.getId());
    }

    @Test
    public void deleteShouldDeleteObjectWhenIdExists() {
        repository.deleteById(existentId);
        Optional<Product> result = repository.findById(existentId);
        Assertions.assertTrue(result.isEmpty());
    }

    @Test
    public void deleteShouldThrowExceptionWhenIdDoesNotExist() {
        Assertions.assertThrows(EmptyResultDataAccessException.class, () -> {
            repository.deleteById(nonExistentId);
        });
    }

    @Test
    public void findAllShouldReturnAList() {
        List<Product> result = repository.findAll();
        Assertions.assertFalse(result.isEmpty());
        Assertions.assertNotNull(result);
    }

    @Test
    public void searchByIdAndReturnProduct() {
        Optional<Product> result = repository.findById(existentId);
        Assertions.assertTrue(result.isPresent());
    }

    @Test
    public void SearchByIdAndReturnVoidOptional() {
        Optional<Product> result = repository.findById(nonExistentId);
        Assertions.assertTrue(result.isEmpty());
    }

}
