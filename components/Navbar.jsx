"use client";
import { useState } from "react";
import { ShoppingCart, Menu, X, Search, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ onCategorySelect }) {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu
  const [isCartOpen, setIsCartOpen] = useState(false); // Cart drawer

  // Example cart data
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Herbal Anti-Dandruff Shampoo", price: "₹199", qty: 1 },
    { id: 2, name: "Hedamo Organic Honey", price: "₹499", qty: 2 },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((acc, item) => {
    const price = parseInt(item.price.replace("₹", ""));
    return acc + price * item.qty;
  }, 0);

  const categories = ["All", "Skincare", "Snacks & Beverages", "Shampoos", "Tablets"];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div
            className="flex items-center font-bold text-xl text-gray-900 cursor-pointer"
            onClick={() => onCategorySelect("All")}
          >
            Hedamo <span className="text-pink-600 ml-1">♡</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-medium text-gray-900">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategorySelect(cat)}
                className="hover:text-blue-600"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search + Cart */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="pl-8 pr-3 py-1 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
              />
              <Search className="absolute left-2 top-2 text-gray-600" size={16} />
            </div>
            <button className="relative text-gray-900" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart size={22} />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-900" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4 space-y-2 text-gray-900">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                onCategorySelect(cat);
                setIsOpen(false);
              }}
              className="block py-2 border-b text-left w-full hover:text-blue-600"
            >
              {cat}
            </button>
          ))}
          <div className="mt-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-3 py-1 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
            />
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed top-0 right-0 w-80 h-full bg-white shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold text-gray-900">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)}>
                <X size={20} className="text-gray-700 hover:text-gray-900" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        {item.price} × {item.qty}
                      </p>
                    </div>
                    <button onClick={() => removeItem(item.id)}>
                      <Trash2 size={16} className="text-red-600 hover:text-red-800" />
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">Your cart is empty</p>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t">
              <p className="font-semibold mb-2 text-gray-900">Total: ₹{total}</p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium">
                Checkout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}







