"use client";
import { motion } from "framer-motion";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl shadow-lg p-6 w-[28rem] max-h-[90vh] overflow-y-auto relative text-gray-900"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Product Header */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
        <h2 className="text-2xl font-bold mb-1 text-gray-900">
          {product.name}
        </h2>
        <p className="text-gray-700 mb-3">{product.description}</p>
        <p className="text-lg font-semibold text-green-700 mb-4">
          {product.pricing.price}{" "}
          <span className="text-sm text-gray-600">
            ({product.pricing.size})
          </span>
        </p>

        {/* Features */}
        {product.features && (
          <div className="mb-4">
            <h3 className="text-md font-semibold mb-2 text-gray-800">
              Features
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {product.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Nutrition Info */}
        {product.nutrition && (
          <div className="mb-4">
            <h3 className="text-md font-semibold mb-2 text-gray-800">
              Nutrition
            </h3>
            <ul className="space-y-1 text-gray-700">
              {Object.entries(product.nutrition).map(([key, value]) => (
                <li key={key}>
                  <span className="font-medium capitalize">{key}: </span>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Traceability */}
        {product.traceability && (
          <div className="mb-4">
            <h3 className="text-md font-semibold mb-2 text-gray-800">
              Traceability
            </h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                <span className="font-medium">Origin:</span>{" "}
                {product.traceability.origin}
              </li>
              <li>
                <span className="font-medium">Batch:</span>{" "}
                {product.traceability.batch}
              </li>
              <li>
                <span className="font-medium">Harvested:</span>{" "}
                {product.traceability.harvested}
              </li>
            </ul>
          </div>
        )}

        {/* Reviews */}
        {product.reviews && product.reviews.length > 0 && (
          <div className="mb-4">
            <h3 className="text-md font-semibold mb-2 text-gray-800">
              Customer Reviews
            </h3>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {product.reviews.map((r, i) => (
                <div key={i} className="border p-2 rounded-lg">
                  <p className="font-medium text-gray-900">{r.user}</p>
                  <p className="text-sm text-gray-700">{r.comment}</p>
                  <p className="text-yellow-500">⭐ {r.rating}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart */}
        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-medium">
          Add to Cart
        </button>
      </motion.div>
    </div>
  );
}
