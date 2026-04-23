import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const BackButton = () => {
  const navigate = useNavigate();
  // const handleBack = () => {
  //   // window.history.back();
  //   navigate("/");
  // };

  return (
    // <div className="fixed bg-red-500 top-0 left-0 w-full max-w-full mx-auto p-3 md:px-5 flex items-center justify-between relative z-50 pointer-events-none">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate(-1)}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/40 backdrop-blur-md border border-white/20 shadow-sm text-slate-700 pointer-events-auto"
      >
        <ChevronLeft size={24} strokeWidth={2.5} className="mr-0.5" />
      </motion.button>
    // </div> 
  );
};

export default BackButton;
