import Image from "../assets/img/Captura de pantalla de 2025-01-20 16-24-42.png";

export function Projects() {
  return (
    <>
      <div className="p-20 text-center flex flex-col items-center">
        <h1 className="text-5xl text-primary p-10">Estos son mis proyectos</h1>
        <a
          className="text-white text-2xl p-10 flex flex-col items-center"
          href="https://alejaromerom.github.io/Countdown-JS/"
        >
          Countdown
          <img
            className="w-full h-52 rounded mt-4 transition ease-in-out delay-150 translate-y-1 hover:scale-150 hover:bg-transparent duration-300"
            src={Image}
            alt="countdown"
          />
        </a>
      </div>
    </>
  );
}
