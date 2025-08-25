"use client";
import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import Navbar from "../components/Navbar";

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <>
      <Navbar onCategorySelect={setCategory} />

      <main className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          {category === "All" ? "Our Products" : category}
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onKnowMore={setSelectedProduct}
            />
          ))}
        </div>

        {/* ✅ Show modal if selected */}
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </main>
    </>
  );
}
