import React from "react";
import { motion } from "framer-motion";

const ImagenFinal = () => {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-black">
      {/* Imagen final */}
      <img
        src="/final.jpg"
        alt="Leonel y Lizbeth"
        className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
        loading="lazy"
      />

      {/* Iniciales */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="absolute inset-x-0 bottom-10 z-10 flex justify-center px-5 sm:bottom-14 md:bottom-16"
      >
        <p
          className="font-playfair text-5xl font-normal tracking-[0.12em] text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] sm:text-6xl md:text-7xl"
          aria-label="Leonel y Lizbeth"
        >
          L
          <span className="mx-3 font-[DancingScript] text-4xl sm:text-5xl md:text-6xl">
            &
          </span>
          L
        </p>
      </motion.div>
    </section>
  );
};

export default ImagenFinal;