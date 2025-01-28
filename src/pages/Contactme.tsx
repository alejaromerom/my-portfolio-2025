import { constants } from "../constants/constants";

export function Contactme() {
  return (
    <>
      <div className="">
        <h1 className="text-3xl text-primary text-center p-10">
          Interactua conmigo
        </h1>
        <div className="flex space-x-10 justify-center">
          {constants.redes.map((red) => (
            <a
              key={red.name}
              href={red.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition ease-in-out delay-150 translate-y-1 hover:scale-150 hover:bg-transparent duration-300"
            >
              <red.icon size={40} stroke={1.5} color="#6ceb1e" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
