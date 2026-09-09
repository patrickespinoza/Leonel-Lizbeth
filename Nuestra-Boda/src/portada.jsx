import React from "react";

export default function Portada() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-black text-white">
      {/* Imagen principal */}
      <img
        src="/portada2.png"
        alt="Leonel y Lizbeth"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
      />

      {/* Degradado únicamente en la parte inferior */}
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

      {/* Contenido inferior */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-5 pb-12 text-center sm:pb-14 md:pb-16 lg:pb-20">

        <h1 className="font-serif text-4xl font-normal leading-tight tracking-wide drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
          Leonel
          <span className="mx-3 font-light">&</span>
          Lizbeth
        </h1>

        <div className="my-5 h-px w-20 bg-white/80 sm:w-28" />

        <p className="font-serif text-lg tracking-[0.25em] drop-shadow-md sm:text-xl md:text-2xl">
          19 · 12 · 2026
        </p>
      </div>
    </section>
  );
}