import React from "react";
import { motion } from "framer-motion";

const Novios = () => {
  const terracota = "#B65F47";
  const terracotaOscuro = "#944735";
  const blancoCalido = "#FFFDF9";

  return (
    <section
      className="relative flex w-full items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:py-28"
      style={{ backgroundColor: blancoCalido }}
    >
      {/* Adornos clásicos de fondo */}
      <div
        className="absolute -left-20 top-16 h-52 w-52 rounded-full border opacity-20"
        style={{ borderColor: terracota }}
      />

      <div
        className="absolute -right-24 bottom-10 h-64 w-64 rounded-full border opacity-20"
        style={{ borderColor: terracota }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        className="relative w-full max-w-5xl overflow-hidden border border-[#B65F47]/30 bg-white px-6 py-14 text-center shadow-[0_18px_55px_rgba(86,42,30,0.12)] sm:px-12 sm:py-16 md:px-16 md:py-20"
      >
        {/* Esquinas decorativas */}
        <div
          className="absolute left-0 top-0 h-16 w-16 border-l-2 border-t-2 sm:h-24 sm:w-24"
          style={{ borderColor: terracota }}
        />

        <div
          className="absolute right-0 top-0 h-16 w-16 border-r-2 border-t-2 sm:h-24 sm:w-24"
          style={{ borderColor: terracota }}
        />

        <div
          className="absolute bottom-0 left-0 h-16 w-16 border-b-2 border-l-2 sm:h-24 sm:w-24"
          style={{ borderColor: terracota }}
        />

        <div
          className="absolute bottom-0 right-0 h-16 w-16 border-b-2 border-r-2 sm:h-24 sm:w-24"
          style={{ borderColor: terracota }}
        />

        {/* Encabezado */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.45em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.28em" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-semibold uppercase sm:text-xs"
          style={{ color: terracota }}
        >
          Nuestra boda
        </motion.p>

        {/* Ornamento superior */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 flex items-center justify-center gap-3"
        >
          <div
            className="h-px w-12 sm:w-20"
            style={{ backgroundColor: terracota }}
          />

          <div
            className="h-2.5 w-2.5 rotate-45"
            style={{ backgroundColor: terracota }}
          />

          <div
            className="h-px w-12 sm:w-20"
            style={{ backgroundColor: terracota }}
          />
        </motion.div>

        {/* Nombres */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-9"
        >
          <h1
            className="font-playfair text-5xl font-normal leading-none sm:text-6xl md:text-7xl"
            style={{ color: "#171717" }}
          >
            Leonel
          </h1>

          <p
            className="my-3 font-[DancingScript] text-4xl sm:text-5xl"
            style={{ color: terracota }}
          >
            &
          </p>

          <h1
            className="font-playfair text-5xl font-normal leading-none sm:text-6xl md:text-7xl"
            style={{ color: "#171717" }}
          >
            Lizbeth
          </h1>
        </motion.div>

        {/* Mensaje de bendición */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div
            className="mx-auto mb-7 h-px w-24"
            style={{ backgroundColor: terracota }}
          />

          <p className="font-playfair text-xl italic leading-relaxed text-black/75 sm:text-2xl">
            Con la bendición de nuestros padres
          </p>
        </motion.div>

        {/* Familia */}
        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8">
          {/* Madre del novio */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            viewport={{ once: true }}
            className="relative border px-6 py-10 sm:px-8"
            style={{
              backgroundColor: blancoCalido,
              borderColor: `${terracota}55`,
            }}
          >
            <div
              className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2"
              style={{ backgroundColor: terracota }}
            />

            <h2
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: terracotaOscuro }}
            >
              Madre del novio
            </h2>

            <div
              className="mx-auto my-6 h-px w-12"
              style={{ backgroundColor: terracota }}
            />

            <p className="font-playfair text-2xl leading-relaxed text-black sm:text-[1.7rem]">
              Crisanta Galeno Vélez
            </p>
          </motion.div>

          {/* Padres de la novia */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            viewport={{ once: true }}
            className="relative border px-6 py-10 sm:px-8"
            style={{
              backgroundColor: blancoCalido,
              borderColor: `${terracota}55`,
            }}
          >
            <div
              className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2"
              style={{ backgroundColor: terracota }}
            />

            <h2
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: terracotaOscuro }}
            >
              Padres de la novia
            </h2>

            <div
              className="mx-auto my-6 h-px w-12"
              style={{ backgroundColor: terracota }}
            />

            <p className="font-playfair text-2xl leading-relaxed text-black sm:text-[1.7rem]">
              Rogerio Baranda Santiago
            </p>

            <p
              className="my-2 font-[DancingScript] text-2xl"
              style={{ color: terracota }}
            >
              y
            </p>

            <p className="font-playfair text-2xl leading-relaxed text-black sm:text-[1.7rem]">
              Misaelda Mayo Aparicio
            </p>
          </motion.div>
        </div>

        {/* Ornamento inferior */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 flex items-center justify-center gap-3"
        >
          <div
            className="h-px w-12 sm:w-20"
            style={{ backgroundColor: terracota }}
          />

          <div
            className="h-2.5 w-2.5 rotate-45"
            style={{ backgroundColor: terracota }}
          />

          <div
            className="h-px w-12 sm:w-20"
            style={{ backgroundColor: terracota }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Novios;