import React from "react";
import { motion } from "framer-motion";

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
    </svg>
  );
};

const Novios = () => {
  const terracota = "#B65F47";
  const terracotaOscuro = "#944735";
  const blancoCalido = "#FFFDF9";

  const familias = [
    {
      titulo: "Madre del novio",
      nombres: ["Crisanta Galeno Vélez"],
    },
    {
      titulo: "Padres de la novia",
      nombres: [
        "Rogerio Baranda Santiago",
        "Misaelda Mayo Aparicio",
      ],
    },
  ];

  const padrinos = [
    {
      titulo: "Padrinos de velación, arras y lazo",
      nombres: [
        "Profesor Jeremías Castellano López",
        "Ilda González Zamora",
      ],
    },
    {
      titulo: "Padrinos de anillos",
      nombres: [
        "Profesor Gustavo López Juárez",
        "Azaret Flores Padilla",
      ],
    },
  ];

  return (
    <section
      className="relative flex w-full items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:py-28"
      style={{ backgroundColor: blancoCalido }}
    >
      {/* Ramas botánicas */}
      <RamaDecorativa className="pointer-events-none absolute -bottom-10 -left-10 w-40 text-[#B65F47]/20 sm:w-52 md:w-60" />

      <RamaDecorativa className="pointer-events-none absolute -right-10 -top-10 w-40 rotate-180 text-[#B65F47]/20 sm:w-52 md:w-60" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.1 }}
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
          <h1 className="font-playfair text-5xl font-normal leading-none text-[#171717] sm:text-6xl md:text-7xl">
            Leonel
          </h1>

          <p
            className="my-3 font-[DancingScript] text-4xl sm:text-5xl"
            style={{ color: terracota }}
          >
            &
          </p>

          <h1 className="font-playfair text-5xl font-normal leading-none text-[#171717] sm:text-6xl md:text-7xl">
            Lizbeth
          </h1>
        </motion.div>

        {/* Bendición */}
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

        {/* Padres */}
        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8">
          {familias.map((familia, index) => (
            <motion.div
              key={familia.titulo}
              initial={{
                opacity: 0,
                x: index === 0 ? -35 : 35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.7 + index * 0.15,
              }}
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
                {familia.titulo}
              </h2>

              <div
                className="mx-auto my-6 h-px w-12"
                style={{ backgroundColor: terracota }}
              />

              {familia.nombres.map((nombre, nombreIndex) => (
                <React.Fragment key={nombre}>
                  <p className="font-playfair text-2xl leading-relaxed text-black sm:text-[1.7rem]">
                    {nombre}
                  </p>

                  {nombreIndex < familia.nombres.length - 1 && (
                    <p
                      className="my-2 font-[DancingScript] text-2xl"
                      style={{ color: terracota }}
                    >
                      y
                    </p>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Separador padrinos */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 flex items-center justify-center gap-3"
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

        {/* Encabezado padrinos */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-9"
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: terracota }}
          >
            Con el cariño de nuestros
          </p>

          <h2 className="mt-4 font-playfair text-4xl font-normal text-[#171717] sm:text-5xl">
            Padrinos
          </h2>
        </motion.div>

        {/* Padrinos */}
        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8">
          {padrinos.map((padrino, index) => (
            <motion.div
              key={padrino.titulo}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.4 + index * 0.15,
              }}
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

              <h3
                className="mx-auto max-w-xs text-xs font-semibold uppercase leading-relaxed tracking-[0.2em]"
                style={{ color: terracotaOscuro }}
              >
                {padrino.titulo}
              </h3>

              <div
                className="mx-auto my-6 h-px w-12"
                style={{ backgroundColor: terracota }}
              />

              {padrino.nombres.map((nombre, nombreIndex) => (
                <React.Fragment key={nombre}>
                  <p className="font-playfair text-xl leading-relaxed text-black sm:text-2xl">
                    {nombre}
                  </p>

                  {nombreIndex < padrino.nombres.length - 1 && (
                    <p
                      className="my-2 font-[DancingScript] text-2xl"
                      style={{ color: terracota }}
                    >
                      y
                    </p>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Ornamento inferior */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 flex items-center justify-center gap-3"
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