package br.com.dh.ecommerce.services;

import br.com.dh.ecommerce.dtos.CategoryDto;
import br.com.dh.ecommerce.entities.Category;
import br.com.dh.ecommerce.repositories.CategoryRepository;
import br.com.dh.ecommerce.services.exceptions.DatabaseException;
import br.com.dh.ecommerce.services.exceptions.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository repository;

    @Transactional(readOnly = true)
    public List<CategoryDto> searchAll() {
        List<Category> list = repository.findAll();
        return list.stream().map(x -> new CategoryDto(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public CategoryDto searchById(Integer id) {
        Optional<Category> object = repository.findById(id);
        Category entity = object.orElseThrow(() -> new EntityNotFoundException(
                "Entity or register " + id + " Not found on database!"
        ));
        return new CategoryDto(entity);
    }

    public void delete(Integer id) {
        try {
            repository.deleteById(id);
        }
        catch (EmptyResultDataAccessException emptyResultDataAccessException) {
            throw new EntityNotFoundException(
                    "Error on Deleting: Register " + id + " not found on your database"
            );
        }
        catch (DataIntegrityViolationException dataIntegrityViolationException) {
            throw new DatabaseException(
                    "Integrity Violation: Register " + id +
                            " is inserted in another register!"
            );
        }
    }

    @Transactional
    public CategoryDto insert(CategoryDto dto) {
        Category entity = new Category();
        entity.setName(dto.getName());
        entity = repository.save(entity);
        return new CategoryDto(entity);
    }

    @Transactional
    public CategoryDto update(Integer id, CategoryDto dto) {

        try {
            Category entity = repository.getReferenceById(id);
            entity.setName(dto.getName());
            entity = repository.save(entity);
            return new CategoryDto(entity);
        }
        catch (EntityNotFoundException entityNotFoundException) {
            throw new EntityNotFoundException(
                    "Entity or register " + id + " Not found on database!"
            );
        }
    }
}
