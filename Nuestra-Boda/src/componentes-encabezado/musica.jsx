import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Music, Volume2, VolumeX, X } from "lucide-react";

const Musica = () => {
  const audioRef = useRef(null);

  const [mostrarModal, setMostrarModal] = useState(true);
  const [reproduciendo, setReproduciendo] = useState(false);
  const [mostrarControl, setMostrarControl] = useState(false);

  const terracota = "#B65F47";
  const terracotaOscuro = "#944735";
  const blancoCalido = "#FFFDF9";

  const reproducirMusica = async () => {
    if (!audioRef.current) return;

    try {
      audioRef.current.volume = 0.7;
      await audioRef.current.play();

      setReproduciendo(true);
      setMostrarModal(false);
      setMostrarControl(true);
    } catch (error) {
      console.error("No fue posible reproducir la música:", error);

      setReproduciendo(false);
      setMostrarModal(false);
      setMostrarControl(true);
    }
  };

  const continuarSinMusica = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    setReproduciendo(false);
    setMostrarModal(false);
    setMostrarControl(true);
  };

  const alternarMusica = async () => {
    if (!audioRef.current) return;

    if (reproduciendo) {
      audioRef.current.pause();
      setReproduciendo(false);
      return;
    }

    try {
      await audioRef.current.play();
      setReproduciendo(true);
    } catch (error) {
      console.error("No fue posible reproducir la música:", error);
      setReproduciendo(false);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return undefined;

    const detenerEstado = () => {
      setReproduciendo(false);
    };

    const activarEstado = () => {
      setReproduciendo(true);
    };

    audio.addEventListener("pause", detenerEstado);
    audio.addEventListener("play", activarEstado);

    return () => {
      audio.pause();
      audio.removeEventListener("pause", detenerEstado);
      audio.removeEventListener("play", activarEstado);
    };
  }, []);

  return (
    <>
      {/* Archivo de audio */}
      <audio
        ref={audioRef}
        src="/musica.mp3"
        loop
        preload="metadata"
      />

      {/* Ventana emergente */}
      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 px-5"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-md overflow-hidden border border-[#B65F47]/40 bg-[#FFFDF9] px-6 py-10 text-center shadow-[0_25px_70px_rgba(0,0,0,0.35)] sm:px-10 sm:py-12"
              role="dialog"
              aria-modal="true"
              aria-labelledby="titulo-musica"
            >
              {/* Esquinas decorativas */}
              <div className="absolute left-0 top-0 h-14 w-14 border-l-2 border-t-2 border-[#B65F47]" />

              <div className="absolute right-0 top-0 h-14 w-14 border-r-2 border-t-2 border-[#B65F47]" />

              <div className="absolute bottom-0 left-0 h-14 w-14 border-b-2 border-l-2 border-[#B65F47]" />

              <div className="absolute bottom-0 right-0 h-14 w-14 border-b-2 border-r-2 border-[#B65F47]" />

              {/* Cerrar */}
              <button
                type="button"
                onClick={continuarSinMusica}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-[#944735] transition hover:bg-[#B65F47]/10"
                aria-label="Cerrar y continuar sin música"
              >
                <X size={21} strokeWidth={1.7} />
              </button>

              {/* Icono */}
              <motion.div
                animate={{
                  rotate: [0, -6, 6, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#B65F47]/40 text-[#B65F47]"
              >
                <Music size={38} strokeWidth={1.4} />
              </motion.div>

              <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B65F47] sm:text-xs">
                Leonel & Lizbeth
              </p>

              <h2
                id="titulo-musica"
                className="mt-4 font-playfair text-4xl font-normal text-[#171717] sm:text-5xl"
              >
                Nuestra canción
              </h2>

              {/* Ornamento */}
              <div className="mx-auto mt-5 flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-[#B65F47]" />

                <div className="h-2.5 w-2.5 rotate-45 bg-[#B65F47]" />

                <div className="h-px w-12 bg-[#B65F47]" />
              </div>

              <p className="mx-auto mt-6 max-w-xs font-playfair text-lg italic leading-relaxed text-black/65">
                Acompaña este momento especial con nuestra música.
              </p>

              {/* Botones */}
              <div className="mt-8 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={reproducirMusica}
                  className="flex w-full items-center justify-center gap-3 bg-[#B65F47] px-6 py-4 font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#944735]"
                >
                  <Volume2 size={20} strokeWidth={1.7} />
                  Escuchar música
                </button>

                <button
                  type="button"
                  onClick={continuarSinMusica}
                  className="w-full border border-[#B65F47]/45 bg-transparent px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-[#944735] transition hover:border-[#B65F47] hover:bg-[#B65F47]/5"
                >
                  Continuar sin música
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Control flotante */}
      <AnimatePresence>
        {mostrarControl && !mostrarModal && (
          <motion.button
            type="button"
            onClick={alternarMusica}
            initial={{
              opacity: 0,
              scale: 0.7,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.7,
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="fixed bottom-5 right-5 z-[9998] flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-[#B65F47] text-white shadow-[0_8px_25px_rgba(0,0,0,0.3)] sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
            aria-label={
              reproduciendo
                ? "Pausar música"
                : "Reproducir música"
            }
            title={
              reproduciendo
                ? "Pausar música"
                : "Reproducir música"
            }
          >
            {reproduciendo ? (
              <Volume2 size={25} strokeWidth={1.7} />
            ) : (
              <VolumeX size={25} strokeWidth={1.7} />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Musica;