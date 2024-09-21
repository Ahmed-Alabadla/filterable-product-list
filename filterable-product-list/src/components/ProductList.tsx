import { useState } from "react";
import Card from "./Card";
import { Product, products } from "./products";

export default function ProductList() {
  const [productsFilter, setProductsFilter] = useState<Product[]>(products);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;

    switch (selectedCategory) {
      case "electronics":
        setProductsFilter(products.filter((p) => p.category === "Electronics"));
        break;

      case "clothing":
        setProductsFilter(products.filter((p) => p.category === "Clothing"));
        break;

      default:
        setProductsFilter(products); // 'All' category shows all products
        break;
    }
  };
  return (
    <div className="container">
      {/* =========== START FILTER DROPDOWN =========== */}
      <div className="flex items-center justify-end">
        <div className="w-32">
          <select
            id="categories"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-sky-600 focus:outline-none focus:border-sky-600 block w-full p-2.5"
            onChange={handleSelect}
          >
            <option value="all" selected>
              All
            </option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
          </select>
        </div>
      </div>
      {/* =========== END FILTER DROPDOWN =========== */}

      {/* =========== START PRODUCT ITEMS =========== */}
      <div className="grid grid-cols-2 gap-x-2 gap-y-6 md:gap-x-8 lg:grid-cols-4 mt-3 mb-8">
        {productsFilter.map((product: Product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      {/* =========== END PRODUCT ITEMS =========== */}
    </div>
  );
}
