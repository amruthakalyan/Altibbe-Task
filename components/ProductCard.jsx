"use client";
import { motion } from "framer-motion";

export default function ProductCard({ product, onKnowMore }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
        <p className="text-gray-600 text-sm">{product.category}</p>
        <p className="mt-2 text-gray-700 line-clamp-2">{product.description}</p>
        <button
          onClick={() => onKnowMore(product)}   
          className="inline-block mt-3 text-blue-600 hover:underline font-medium"
        >
          Know More →
        </button>
      </div>
    </motion.div>
  );
}
