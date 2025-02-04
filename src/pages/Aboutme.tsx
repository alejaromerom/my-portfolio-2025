import React from "react";

export function Aboutme() {
  return (
    <>
      <div className=" flex flex-col sm:flex-row items-center p-10">
        <div className="w-full sm:w-1/3 flex justify-center mb-6 sm:mb-0">
          <img
            className="w-48 h-48 sm:w-48 sm:h-48 rounded-sm object-cover shadow-lg transition ease-in-out delay-150 translate-y-1 hover:scale-150 hover:bg-transparent duration-300"
            src="../src/assets/img/Ale.jpeg"
            alt="Ale"
          />
        </div>

        <div className="sm:w-2/3 sm:text-left sm:ml-10">
          <h1 className="text-5xl  text-primary p-10 mb-4 ">Hola soy Ale</h1>
          <p className=" text-justify rounded-lg border-2 p-8  border-accent text-white text-lg sm:text-xl transition ease-in-out delay-150 translate-y-1 hover:scale-105 hover:bg-transparent duration-300 motion-preset-flomoji-👉">
            Me encanta aprender cosas nuevas, me gusta la programación,la
            tecnología, y me gusta compartir lo que aprendo. Soy Frontend
            Developer y trabajo con React, Express y Node js usando TypeScript,
            estoy aprendiendo TailwindCSS entre otras tecnologías. Me gusta la
            música, la fotografía, los gatos y la comida.
          </p>
        </div>
      </div>
    </>
  );
}
