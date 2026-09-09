import React from "react";
import { motion } from "framer-motion";

/* Ilustración de traje formal */
const IconoTraje = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 180 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Cuello y hombros */}
      <path
        d="M66 26L45 38L21 67L34 143L51 137L55 276H82L90 154"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M114 26L135 38L159 67L146 143L129 137L125 276H98L90 154"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Cuello de camisa */}
      <path
        d="M66 26L90 43L114 26"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M72 24L90 43L79 59L62 35"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M108 24L90 43L101 59L118 35"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Corbata */}
      <path
        d="M85 46L90 42L95 46L92 58H88L85 46Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      <path
        d="M88 58H92L97 119L90 132L83 119L88 58Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Solapas */}
      <path
        d="M62 35L78 70L90 132L59 95L70 78L55 70"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M118 35L102 70L90 132L121 95L110 78L125 70"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Saco */}
      <path
        d="M90 132V154"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <circle cx="80" cy="143" r="2.5" fill="currentColor" />
      <circle cx="80" cy="157" r="2.5" fill="currentColor" />

      <path
        d="M54 132L43 179"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M126 132L137 179"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Pantalón */}
      <path
        d="M55 184H125"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M90 184V276"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M55 276H82"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M98 276H125"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

/* Ilustración de vestido formal */
const IconoVestido = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 180 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Tirantes */}
      <path
        d="M72 25L65 62"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M108 25L115 62"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Escote */}
      <path
        d="M72 25C78 38 84 44 90 48C96 44 102 38 108 25"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Cuerpo */}
      <path
        d="M65 62C70 86 74 104 68 125"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M115 62C110 86 106 104 112 125"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M65 62C80 68 100 68 115 62"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M68 125C80 130 100 130 112 125"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Falda */}
      <path
        d="M68 125C60 166 42 218 24 273"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M112 125C120 166 138 218 156 273"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M24 273C57 285 123 285 156 273"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Pliegues */}
      <path
        d="M76 132L60 270"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M90 132V276"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M104 132L120 270"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Cintura */}
      <path
        d="M68 116C82 121 98 121 112 116"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

/* Rama botánica */
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
    </svg>
  );
};

const Vestimenta = () => {
  const terracota = "#B65F47";
  const blancoCalido = "#FFFDF9";

  return (
    <section
      className="relative flex w-full items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:py-28"
      style={{ backgroundColor: blancoCalido }}
    >
      {/* Ramas decorativas */}
      <RamaDecorativa className="pointer-events-none absolute -bottom-10 -left-10 w-40 text-[#B65F47]/25 sm:w-52 md:w-60" />

      <RamaDecorativa className="pointer-events-none absolute -right-10 -top-10 w-40 rotate-180 text-[#B65F47]/25 sm:w-52 md:w-60" />

      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 w-full max-w-4xl text-center"
      >
        {/* Título */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.45em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.28em" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-semibold uppercase sm:text-xs"
          style={{ color: terracota }}
        >
          Código de vestimenta
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-5 font-playfair text-5xl font-normal text-[#171717] sm:text-6xl md:text-7xl"
        >
          Formal
        </motion.h2>

        {/* Ornamento */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.35 }}
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

        {/* Iconos */}
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-5 sm:gap-12">
          {/* Traje */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            viewport={{ once: true }}
            className="flex flex-col items-center border-r border-[#B65F47]/25 pr-4 sm:pr-10"
          >
            <IconoTraje className="h-56 w-32 text-[#B65F47] sm:h-72 sm:w-44" />

            <p className="mt-4 font-playfair text-xl text-black sm:text-2xl">
              Caballeros
            </p>
          </motion.div>

          {/* Vestido */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center pl-4 sm:pl-10"
          >
            <IconoVestido className="h-56 w-32 text-[#B65F47] sm:h-72 sm:w-44" />

            <p className="mt-4 font-playfair text-xl text-black sm:text-2xl">
              Damas
            </p>
          </motion.div>
        </div>

        {/* Texto breve */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-md font-playfair text-lg italic leading-relaxed text-black/65 sm:text-xl"
        >
          Agradecemos asistir con vestimenta formal.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Vestimenta;