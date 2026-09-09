import React from "react";
import { motion } from "framer-motion";
import { Church, Wine, Heart, Cake } from "lucide-react";

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

const Itinerario2 = () => {
  const eventos = [
    {
      titulo: "Ceremonia",
      descripcion: "El inicio de nuestra historia juntos",
      hora: "6:00 PM",
      Icono: Church,
    },
    {
      titulo: "Recepción",
      descripcion: "Bienvenida a nuestros invitados",
      hora: "8:00 – 9:00 PM",
      Icono: Wine,
    },
    {
      titulo: "Momentos especiales",
      descripcion: "Vals, víbora, brindis, pastel y fotos",
      hora: "9:00 – 10:30 PM",
      Icono: Cake,
    },
  ];

  const animacionEvento = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: index * 0.14,
      },
    }),
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#B65F47] px-5 py-20 text-white sm:px-8 md:py-28">
      {/* Ramas decorativas */}
      <RamaDecorativa className="pointer-events-none absolute -left-10 -top-10 w-40 rotate-180 text-white/20 sm:w-52 md:w-60" />

      <RamaDecorativa className="pointer-events-none absolute -bottom-10 -right-10 w-40 text-white/20 sm:w-52 md:w-60" />

      {/* Esquinas */}
      <div className="absolute left-5 top-5 h-16 w-16 border-l border-t border-white/30 sm:left-8 sm:top-8 sm:h-24 sm:w-24" />

      <div className="absolute bottom-5 right-5 h-16 w-16 border-b border-r border-white/30 sm:bottom-8 sm:right-8 sm:h-24 sm:w-24" />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/80 sm:text-xs">
            Nuestro día
          </p>

          <h2 className="mt-5 font-playfair text-5xl font-normal sm:text-6xl md:text-7xl">
            Itinerario
          </h2>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-white/70 sm:w-20" />

            <div className="h-2.5 w-2.5 rotate-45 bg-white" />

            <div className="h-px w-12 bg-white/70 sm:w-20" />
          </div>
        </motion.div>

        {/* Línea del tiempo */}
        <div className="relative mx-auto mt-16 max-w-2xl">
          <div className="absolute bottom-10 left-8 top-10 w-px bg-white/35 sm:left-10" />

          <div className="flex flex-col gap-10">
            {eventos.map((evento, index) => {
              const IconoEvento = evento.Icono;

              return (
                <motion.article
                  key={`${evento.titulo}-${index}`}
                  custom={index}
                  variants={animacionEvento}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative grid grid-cols-[64px_1fr] items-center gap-5 sm:grid-cols-[80px_1fr] sm:gap-8"
                >
                  {/* Icono */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white bg-[#B65F47] sm:h-20 sm:w-20">
                    <IconoEvento
                      size={30}
                      strokeWidth={1.4}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Información */}
                  <div className="border-b border-white/25 pb-9">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75 sm:text-sm">
                      {evento.hora}
                    </p>

                    <h3 className="mt-2 font-playfair text-2xl leading-tight sm:text-3xl">
                      {evento.titulo}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
                      {evento.descripcion}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Itinerario2;