import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock3, MapPin } from "lucide-react";

/* Rama botánica decorativa */
const RamaDecorativa = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 180 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M30 245C49 206 65 167 82 126C97 90 117 55 151 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M48 207C28 204 16 191 12 171C33 175 47 186 48 207Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <path
        d="M62 174C38 166 28 150 29 128C51 136 63 151 62 174Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <path
        d="M78 135C56 126 48 108 52 87C72 97 82 113 78 135Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <path
        d="M94 101C78 84 76 65 86 46C101 62 105 80 94 101Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <path
        d="M51 199C69 187 87 187 104 197C86 208 68 209 51 199Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <path
        d="M66 164C87 153 106 156 121 169C101 178 83 176 66 164Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <path
        d="M83 126C103 114 123 116 139 128C120 139 101 138 83 126Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <path
        d="M101 91C121 79 139 81 153 93C135 103 118 103 101 91Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <path
        d="M119 59C116 38 126 22 145 12C147 32 138 48 119 59Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Celebracion = () => {
  const terracota = "#B65F47";
  const terracotaOscuro = "#944735";
  const blanco = "#FFFDF9";

  const abrirUbicacion = () => {
    window.open(
      "https://maps.app.goo.gl/Ws1fR3WUQmpdPXfJA",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      className="relative flex w-full items-center justify-center overflow-hidden px-5 py-20 text-white sm:px-8 md:py-28"
      style={{ backgroundColor: terracota }}
    >
      {/* Ramas decorativas */}
      <RamaDecorativa className="pointer-events-none absolute -bottom-8 -left-8 w-36 text-white/30 sm:w-48 md:w-56" />

      <RamaDecorativa className="pointer-events-none absolute -right-8 -top-8 w-36 rotate-180 text-white/30 sm:w-48 md:w-56" />

      {/* Líneas decorativas */}
      <div className="absolute left-5 top-5 h-16 w-16 border-l border-t border-white/30 sm:left-8 sm:top-8 sm:h-24 sm:w-24" />

      <div className="absolute bottom-5 right-5 h-16 w-16 border-b border-r border-white/30 sm:bottom-8 sm:right-8 sm:h-24 sm:w-24" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        className="relative z-10 w-full max-w-5xl text-center"
      >
        {/* Encabezado */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-semibold uppercase text-white/80 sm:text-xs"
        >
          Acompáñanos a celebrar
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-5 font-playfair text-5xl font-normal sm:text-6xl md:text-7xl"
        >
          Celebración
        </motion.h2>

        {/* Ornamento */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.35 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 flex items-center justify-center gap-3"
        >
          <div className="h-px w-12 bg-white/70 sm:w-20" />
          <div className="h-2.5 w-2.5 rotate-45 bg-white" />
          <div className="h-px w-12 bg-white/70 sm:w-20" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.45 }}
          viewport={{ once: true }}
          className="mx-auto mt-7 max-w-xl font-playfair text-lg italic leading-relaxed text-white/90 sm:text-xl"
        >
          Nos llenará de alegría compartir este momento tan especial contigo.
        </motion.p>

        {/* Información del evento */}
        <div className="mt-12 grid grid-cols-1 border-y border-white/30 md:grid-cols-3">
          {/* Fecha */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            viewport={{ once: true }}
            className="flex flex-col items-center px-5 py-9 md:border-r md:border-white/30"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/60">
              <CalendarDays size={25} strokeWidth={1.5} />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/75">
              Sábado
            </p>

            <p className="mt-3 font-playfair text-2xl leading-tight sm:text-3xl">
              19 de diciembre
            </p>

            <p className="mt-1 font-playfair text-xl text-white/85">
              2026
            </p>
          </motion.div>

          {/* Lugar */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-center border-y border-white/30 px-5 py-9 md:border-y-0 md:border-r"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/60">
              <MapPin size={25} strokeWidth={1.5} />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/75">
              Ceremonia
            </p>

            <p className="mt-3 font-playfair text-2xl leading-tight sm:text-3xl">
              Santana Necoxtla
            </p>

            <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/80 sm:text-base">
              Epatlán, Puebla
            </p>
          </motion.div>

          {/* Hora */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            viewport={{ once: true }}
            className="flex flex-col items-center px-5 py-9"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/60">
              <Clock3 size={25} strokeWidth={1.5} />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/75">
              Hora de la ceremonia
            </p>

            <p className="mt-3 font-playfair text-3xl sm:text-4xl">
              6:00 PM
            </p>
          </motion.div>
        </div>

        {/* Botón de ubicación */}
        <motion.button
          type="button"
          onClick={abrirUbicacion}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.04,
            backgroundColor: blanco,
            color: terracotaOscuro,
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 flex items-center justify-center gap-3 rounded-full border border-white bg-transparent px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-lg sm:px-10"
          aria-label="Abrir ubicación de la ceremonia en Google Maps"
        >
          <MapPin size={19} strokeWidth={1.7} />
          Ver ubicación
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Celebracion;