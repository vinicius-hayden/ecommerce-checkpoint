package br.com.dh.ecommerce.repositories;

import br.com.dh.ecommerce.entities.Category;
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
public class CategoryRepositoryTest {

    @Autowired
    private CategoryRepository repository;

    private Integer existentId;
    private Integer nonExistentId;
    private Integer countTotalCategories;
    private List<Category> categoryList;

    @BeforeEach
    void setup() throws Exception {
        existentId = 1;
        nonExistentId = 99;
        countTotalCategories = 3;
        categoryList = new ArrayList<>();
    }

    @Test
    public void saveShouldSaveWithAutoIncrementWhenIdIsNull() {
        Category category = Factory.createCategory();
        category = repository.save(category);
        Assertions.assertNotNull(category.getId());
        Assertions.assertEquals(countTotalCategories + 1, category.getId());
    }

    @Test
    public void deleteShouldDeleteObjectWhenIdExists() {
        repository.deleteById(existentId);
        Optional<Category> result = repository.findById(existentId);
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
        List<Category> result = repository.findAll();
        Assertions.assertFalse(result.isEmpty());
        Assertions.assertNotNull(result);
    }

    @Test
    public void searchByIdAndReturnProduct() {
        Optional<Category> result = repository.findById(existentId);
        Assertions.assertTrue(result.isPresent());
    }

    @Test
    public void SearchByIdAndReturnVoidOptional() {
        Optional<Category> result = repository.findById(nonExistentId);
        Assertions.assertTrue(result.isEmpty());
    }

}

