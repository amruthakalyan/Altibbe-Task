import { motion } from "framer-motion";

export default function DetailCard({ title, children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl shadow-md p-5"
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
      <div className="text-gray-700">{children}</div>
    </motion.div>
  );
}
