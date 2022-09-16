package br.com.dh.ecommerce.services;

import br.com.dh.ecommerce.dtos.CategoryDto;
import br.com.dh.ecommerce.dtos.ProductDto;
import br.com.dh.ecommerce.entities.Category;
import br.com.dh.ecommerce.entities.Product;
import br.com.dh.ecommerce.repositories.CategoryRepository;
import br.com.dh.ecommerce.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Transactional(readOnly = true)
    public List<ProductDto> searchAll() {
        List<Product> list = repository.findAll();
        return list.stream().map(x -> new ProductDto(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public ProductDto searchById(Integer id) {
        Optional<Product> object = repository.findById(id);
        Product entity = object.get();
        return new ProductDto(entity);
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }
    @Transactional
    public ProductDto insert(ProductDto dto) {
        Product entity = new Product();
        copyDtoToEntity(dto, entity);
        entity.setTitle(dto.getTitle());
        entity.setDescription(dto.getDescription());
        entity.setImage(dto.getImage());
        entity.setPrice(dto.getPrice());
        entity = repository.save(entity);
        return new ProductDto(entity);
    }

    @Transactional
    public ProductDto update(Integer id, ProductDto dto) {
        Product entity = repository.getReferenceById(id);
        copyDtoToEntity(dto, entity);
        entity.setTitle(dto.getTitle());
        entity.setDescription(dto.getDescription());
        entity.setImage(dto.getImage());
        entity.setPrice(dto.getPrice());
        entity = repository.save(entity);
        return new ProductDto(entity);
    }

    private void copyDtoToEntity(ProductDto dto, Product product) {
        product.setTitle(dto.getTitle());
        product.setDescription(dto.getDescription());
        product.setImage(dto.getImage());
        product.setPrice(dto.getPrice());

        product.getCategories().clear();
        for (CategoryDto categoryDto : dto.getCategories()) {
            Category category = categoryRepository.getReferenceById(categoryDto.getId());
            product.getCategories().add(category);
        }
    }
}
