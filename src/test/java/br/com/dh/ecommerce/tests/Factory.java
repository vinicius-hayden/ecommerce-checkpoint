package br.com.dh.ecommerce.tests;

import br.com.dh.ecommerce.dtos.CategoryDto;
import br.com.dh.ecommerce.dtos.ProductDto;
import br.com.dh.ecommerce.entities.Category;
import br.com.dh.ecommerce.entities.Product;

public class Factory {

    public static Category createCategory() {
        Category category = new Category(null, "Wearables");
        return category;
    }

    public static CategoryDto createCategoryDto() {
        Category category = createCategory();
        return new CategoryDto(category);
    }

    public static Product createProduct() {
        Product product = new Product(null, "T-shirt", "A simple yet perfect beatiful t-shirt", "https://m.media-amazon.com/images/I/61QZ72APrOL._UX569_.jpg", 15.20);
        return product;
    }

   public static ProductDto createProductDto() {
        Product product = createProduct();
        return new ProductDto(product);
   }

}
