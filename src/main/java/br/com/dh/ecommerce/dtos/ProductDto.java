package br.com.dh.ecommerce.dtos;

import br.com.dh.ecommerce.entities.Product;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

public class ProductDto implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer id;
    private String title;
    private String description;
    private String image;
    private double price;

    private Set<CategoryDto> categories = new HashSet<>();

    public ProductDto() {
    }

    public ProductDto(Integer id, String title, String description, String image, double price) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.price = price;
    }

    public ProductDto(Product product) {
        this.id = product.getId();
        this.title = product.getTitle();
        this.description = product.getDescription();
        this.image = product.getImage();
        this.price = product.getPrice();
        product.getCategories().forEach(category -> this.categories.add(new CategoryDto(category)));
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Set<CategoryDto> getCategories() {
        return categories;
    }

}
