import cv from "../assets/pdf/CV-Alejandra-Romero-2025.pdf";
export function Home() {
  return (
    <>
      <div className="sm:text-center items-center p-10">
        <h1 className="text-5xl  text-primary p-10 mb-4 ">
          Bienvenido a mi portafolio
        </h1>
      </div>
      <div className="  sm:text-center sm:ml-10">
        <p className="text-center text-white sm:text-xl lg:text-5xl font-medium motion-preset-pop ">
          Transformo ideas en experiencias <br />
          <br />
          web modernas y funcionales.
        </p>
        <h3 className="text-primary p-6 text-center">
          {" "}
          Haz click para descargar mi CV
        </h3>
        <div className="p-10 ">
          {" "}
          <a
            className="pt-2 pr-6 pl-6 pb-2 border-0 rounded bg-secondary text-white items-center text-lg"
            href={cv}
            download="maria_alejandra_cv_2025"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </>
  );
}
