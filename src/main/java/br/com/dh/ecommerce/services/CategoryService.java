package br.com.dh.ecommerce.services;

import br.com.dh.ecommerce.dtos.CategoryDto;
import br.com.dh.ecommerce.entities.Category;
import br.com.dh.ecommerce.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
        Category entity = object.get();
        return new CategoryDto(entity);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
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
        Category entity = repository.getReferenceById(id);
        entity.setName(dto.getName());
        entity = repository.save(entity);
        return new CategoryDto(entity);
    }

}
