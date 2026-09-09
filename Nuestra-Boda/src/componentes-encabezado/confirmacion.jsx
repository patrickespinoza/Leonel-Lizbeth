import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  UserRound,
  UsersRound,
  MessageSquareText,
  Send,
} from "lucide-react";

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

export default function ConfirmacionAsistencia() {
  const [nombre, setNombre] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [confirmacion, setConfirmacion] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzXZY6eOMfyWKdCL2hDIvAilwazYjkgR7iCGIgPR5xYcGVQIiVMNLY-uPtjP3Qbg7Mm/exec";

  const seleccionarAsistencia = (respuesta) => {
    setAsistencia(respuesta);
    setConfirmacion("");
    setTipoMensaje("");

    if (respuesta === "No asistiré") {
      setInvitados("0");
    } else if (invitados === "0") {
      setInvitados("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (enviando) return;

    if (!nombre.trim()) {
      setTipoMensaje("error");
      setConfirmacion("Por favor, escribe tu nombre y apellido.");
      return;
    }

    if (!asistencia) {
      setTipoMensaje("error");
      setConfirmacion("Por favor, selecciona si asistirás.");
      return;
    }

    if (
      asistencia === "Sí asistiré" &&
      (!invitados || Number(invitados) < 1)
    ) {
      setTipoMensaje("error");
      setConfirmacion("Indica el número de personas que asistirán.");
      return;
    }

    setEnviando(true);
    setConfirmacion("");
    setTipoMensaje("");

    const datos = {
      nombre: nombre.trim(),
      asistencia,
      invitados:
        asistencia === "Sí asistiré" ? Number(invitados) : 0,
      mensaje: mensaje.trim(),
      fecha: new Date().toLocaleString("es-MX", {
        timeZone: "America/Mexico_City",
      }),
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(datos),
      });

      setTipoMensaje("exito");
      setConfirmacion("¡Gracias! Tu confirmación fue enviada correctamente.");

      setNombre("");
      setAsistencia("");
      setInvitados("");
      setMensaje("");
    } catch (error) {
      console.error("Error al enviar la confirmación:", error);

      setTipoMensaje("error");
      setConfirmacion(
        "No fue posible enviar tu confirmación. Intenta nuevamente."
      );
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#FFFDF9] px-5 py-20 sm:px-8 md:py-28">
      {/* Ramas decorativas */}
      <RamaDecorativa className="pointer-events-none absolute -bottom-10 -left-10 w-40 text-[#B65F47]/25 sm:w-52 md:w-60" />

      <RamaDecorativa className="pointer-events-none absolute -right-10 -top-10 w-40 rotate-180 text-[#B65F47]/25 sm:w-52 md:w-60" />

      {/* Esquinas clásicas */}
      <div className="absolute left-5 top-5 h-16 w-16 border-l border-t border-[#B65F47]/25 sm:left-8 sm:top-8 sm:h-24 sm:w-24" />

      <div className="absolute bottom-5 right-5 h-16 w-16 border-b border-r border-[#B65F47]/25 sm:bottom-8 sm:right-8 sm:h-24 sm:w-24" />

      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        className="relative z-10 mx-auto w-full max-w-2xl"
      >
        {/* Encabezado */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.45em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.28em" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-semibold uppercase text-[#B65F47] sm:text-xs"
          >
            Leonel & Lizbeth
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-5 font-playfair text-4xl font-normal leading-tight text-[#171717] sm:text-5xl md:text-6xl"
          >
            Confirmación de asistencia
          </motion.h2>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#B65F47] sm:w-20" />
            <div className="h-2.5 w-2.5 rotate-45 bg-[#B65F47]" />
            <div className="h-px w-12 bg-[#B65F47] sm:w-20" />
          </div>

          <p className="mx-auto mt-6 max-w-lg font-playfair text-lg italic leading-relaxed text-black/65">
            Nos encantará saber si podremos contar con tu presencia.
          </p>
        </div>

        {/* Formulario */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 space-y-6 border border-[#B65F47]/25 bg-white p-6 shadow-[0_15px_45px_rgba(86,42,30,0.10)] sm:p-10"
        >
          {/* Nombre */}
          <div>
            <label
              htmlFor="nombre"
              className="mb-2 block text-left text-xs font-semibold uppercase tracking-[0.16em] text-black/65"
            >
              Nombre y apellido
            </label>

            <div className="relative">
              <UserRound
                size={20}
                strokeWidth={1.6}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#B65F47]"
              />

              <input
                id="nombre"
                type="text"
                placeholder="Escribe tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                disabled={enviando}
                autoComplete="name"
                className="w-full border border-[#B65F47]/30 bg-[#FFFDF9] py-4 pl-12 pr-4 text-[#171717] outline-none transition focus:border-[#B65F47] disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>
          </div>

          {/* Asistencia */}
          <fieldset>
            <legend className="mb-3 block text-left text-xs font-semibold uppercase tracking-[0.16em] text-black/65">
              ¿Podrás acompañarnos?
            </legend>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => seleccionarAsistencia("Sí asistiré")}
                disabled={enviando}
                className={`flex items-center justify-center gap-2 border px-4 py-4 font-medium transition disabled:cursor-not-allowed disabled:opacity-60 ${
                  asistencia === "Sí asistiré"
                    ? "border-[#B65F47] bg-[#B65F47] text-white"
                    : "border-[#B65F47]/40 bg-white text-[#171717] hover:border-[#B65F47]"
                }`}
              >
                {asistencia === "Sí asistiré" && (
                  <Check size={18} strokeWidth={2} />
                )}

                Sí asistiré
              </button>

              <button
                type="button"
                onClick={() => seleccionarAsistencia("No asistiré")}
                disabled={enviando}
                className={`flex items-center justify-center gap-2 border px-4 py-4 font-medium transition disabled:cursor-not-allowed disabled:opacity-60 ${
                  asistencia === "No asistiré"
                    ? "border-[#B65F47] bg-[#B65F47] text-white"
                    : "border-[#B65F47]/40 bg-white text-[#171717] hover:border-[#B65F47]"
                }`}
              >
                {asistencia === "No asistiré" && (
                  <Check size={18} strokeWidth={2} />
                )}

                No asistiré
              </button>
            </div>
          </fieldset>

          {/* Número de invitados */}
          {asistencia === "Sí asistiré" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.35 }}
            >
              <label
                htmlFor="invitados"
                className="mb-2 block text-left text-xs font-semibold uppercase tracking-[0.16em] text-black/65"
              >
                Personas que asistirán
              </label>

              <div className="relative">
                <UsersRound
                  size={20}
                  strokeWidth={1.6}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#B65F47]"
                />

                <input
                  id="invitados"
                  type="number"
                  min="1"
                  step="1"
                  inputMode="numeric"
                  placeholder="Número de personas"
                  value={invitados}
                  onChange={(e) => setInvitados(e.target.value)}
                  disabled={enviando}
                  className="w-full border border-[#B65F47]/30 bg-[#FFFDF9] py-4 pl-12 pr-4 text-[#171717] outline-none transition focus:border-[#B65F47] disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>
            </motion.div>
          )}

          {/* Mensaje */}
          <div>
            <label
              htmlFor="mensaje"
              className="mb-2 block text-left text-xs font-semibold uppercase tracking-[0.16em] text-black/65"
            >
              Mensaje para los novios
            </label>

            <div className="relative">
              <MessageSquareText
                size={20}
                strokeWidth={1.6}
                className="pointer-events-none absolute left-4 top-4 text-[#B65F47]"
              />

              <textarea
                id="mensaje"
                placeholder="Escribe un mensaje especial"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                disabled={enviando}
                rows={4}
                maxLength={500}
                className="w-full resize-none border border-[#B65F47]/30 bg-[#FFFDF9] py-4 pl-12 pr-4 text-[#171717] outline-none transition focus:border-[#B65F47] disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={enviando}
            className="flex w-full items-center justify-center gap-3 bg-[#B65F47] px-6 py-4 font-semibold uppercase tracking-[0.13em] text-white transition hover:bg-[#944735] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send size={19} strokeWidth={1.7} />

            {enviando ? "Enviando..." : "Confirmar asistencia"}
          </button>

          {/* Resultado */}
          {confirmacion && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              role="status"
              aria-live="polite"
              className={`border px-4 py-3 text-center text-sm font-medium ${
                tipoMensaje === "exito"
                  ? "border-[#B65F47]/30 bg-[#B65F47]/10 text-[#944735]"
                  : "border-red-300 bg-red-50 text-red-700"
              }`}
            >
              {confirmacion}
            </motion.p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
}